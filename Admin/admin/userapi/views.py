from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse    
from adminApp.models import User
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_200_OK
from rest_framework.authtoken.models import Token
from adminApp.serializers import MovieSerializer, WatchHistorySerializer
from adminApp.models import Movie, watchlist, User, WatchHistory
from rest_framework import status


@api_view(['POST'])
@permission_classes((AllowAny,))

def Signup(request):
        email  = request.data.get("email")
        password = request.data.get("password")
        name = request.data.get("name")
        print(name,email,password)
        if not name or not email or not password:
            return Response({'message':'All fields are required'})
        if User.objects.filter(email=email).exists():
            return  JsonResponse({'message':'Email already exist'})
        user = User.objects.create_user(email=email,password=password)
        user.name = name
        user.save()
        return JsonResponse({'message':'user created successsfully'} ,status = 200)

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def Login(request):
    email = request.data.get("email")
    password = request.data.get("password")
    if email is None or password is None:
        return Response({'error': 'Please provide both email and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(email=email, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},status=HTTP_200_OK)

@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def movie_list(request):
    movie_list = Movie.objects.all()
    serializer = MovieSerializer(movie_list, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def movie_by_id(request, movie_id):
    try:
        movies = Movie.objects.get(id=movie_id)
    except Movie.DoesNotExist:
        return Response(
            {"message": "Movie not found"},
            
        )

    serializer = MovieSerializer(movies)
    return Response(serializer.data)

    status=status.HTTP_404_NOT_FOUND

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_watchlist(request):
    movie_id = request.data.get("movie_id")

    if not movie_id:
        return Response({"message": "movie_id required"}, status=400)

    movie = Movie.objects.get(id=movie_id)

    watchlist.objects.get_or_create(
        user_id=request.user,
        movie_id=movie
    )

    return Response({"message": "Movie added to watchlist"}, status=201)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_watchlist(request):
    items = watchlist.objects.filter(user_id=request.user)

    movies = [item.movie_id for item in items]
    serializer = MovieSerializer(movies, many=True)

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def remove_from_watchlist(request):
    movie_id = request.data.get("movie_id")

    try:
        watchlist.objects.get(
            user_id=request.user,
            movie_id_id=movie_id
        ).delete()
    except watchlist.DoesNotExist:
        return Response({"message": "Not in watchlist"}, status=404)

    return Response({"message": "Removed from watchlist"})

@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def view_history(request, user_id):
    history = WatchHistory.objects.filter(
        user_id_id=user_id
    ).select_related("movie_id").order_by("-watched_on")

    movies = [item.movie_id for item in history]
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_history(request):
    movie_id = request.data.get("movie_id")

    movie = Movie.objects.get(id=movie_id)

    WatchHistory.objects.create(
        user_id=request.user,
        movie_id=movie
    )

    return Response({"message": "Added to history"}, status=201)


@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def change_password(request):
    user_id = request.data.get("user_id")
    old_password = request.data.get("old_password")
    new_password = request.data.get("new_password")

    if not user_id or not old_password or not new_password:
        return Response(
            {"message": "user_id, old_password, and new_password are required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response(
            {"message": "User not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    if not user.check_password(old_password):
        return Response(
            {"message": "Old password is incorrect"},
            status=status.HTTP_400_BAD_REQUEST
        )

    user.set_password(new_password)
    user.save()

    return Response(
        {"message": "Password changed successfully"},
        status=status.HTTP_200_OK
    )   

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_movies(request):
    query = request.GET.get('q', '')
    genre = request.GET.get('genre', '')
    year = request.GET.get('year', '')

    movies = Movie.objects.all()

    if query:
        movies = movies.filter(title__icontains=query)

    if genre:
        movies = movies.filter(genre__iexact=genre)

    if year:
        movies = movies.filter(year=year)

    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)
