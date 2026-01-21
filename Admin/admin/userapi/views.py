from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.http import JsonResponse    
from adminApp.models import User
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_200_OK
from rest_framework.authtoken.models import Token
from adminApp.serializers import MovieSerializer
from adminApp.models import Movie, watchlist, User, watchHistory
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
@permission_classes((AllowAny,))
def movie_list(request):
    movie_list = Movie.objects.all()
    serializer = MovieSerializer(movie_list, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((AllowAny,))
def movie_by_id(request, movie_id):
    try:
        movie = Movie.objects.get(id=movie_id)
    except Movie.DoesNotExist:
        return Response(
            {"message": "Movie not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = MovieSerializer(movie)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes((AllowAny,))
def add_to_watchlist(request):
    user_id = request.data.get("user_id")
    movie_id = request.data.get("movie_id")

    if not user_id or not movie_id:
        return Response(
            {"message": "user_id and movie_id are required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = User.objects.get(id=user_id)
        movie = Movie.objects.get(id=movie_id)
    except (User.DoesNotExist, Movie.DoesNotExist):
        return Response(
            {"message": "User or Movie not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    watchlist, created = watchlist.objects.get_or_create(
        user=user,
        movie=movie
    )

    if not created:
        return Response(
            {"message": "Movie already in watchlist"},
            status=status.HTTP_200_OK
        )

    return Response(
        {"message": "Movie added to watchlist"},
        status=status.HTTP_201_CREATED
    )
