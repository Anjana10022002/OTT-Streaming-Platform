from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from rest_framework.authtoken.models import Token
from .models import User, Movie, WatchHistory
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout 

# def movielist_page(request):
#     return render(request, './movielist.html')
# def userlist_page(request):
#     return render(request, './userlist.html')
def report_page(request):
    return render(request, './report.html')
def movieview_page(request):
    return render(request, './movieview.html')
def change_password(request):
    return render(request, './passwordchange.html')
def add_movie(request):
    return render(request, './addmovie.html')

def admin_login(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]

        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            return redirect("admin_home")

    return render(request, "login.html")


@login_required(login_url="admin_login")
def admin_home(request):
        return render(request, "home.html")

@login_required(login_url="admin_login")
def admin_logout(request):
    if request.method == "POST":
        logout(request)
        return redirect("admin_login")

@login_required(login_url="admin_login")
def movielist_page(request):
    movies = Movie.objects.all().order_by("-id")
    return render(request, "movielist.html", {"movies": movies})

@login_required(login_url="admin_login")
def delete_movie(request, movie_id):
    if request.method == "POST":
        Movie.objects.filter(id=movie_id).delete()
    return redirect("movielist")

@login_required(login_url="admin_login")
def userlist_page(request):
    users = User.objects.filter(is_admin=False).order_by("-id")
    return render(request, "userlist.html", {"users": users})

@login_required(login_url="admin_login")
def delete_movie(request, movie_id):
    if request.method == "POST":
        Movie.objects.filter(id=movie_id).delete()
    return redirect("movielist")


@login_required(login_url="admin_login")
def user_history(request, user_id):
    history = WatchHistory.objects.filter(user_id=user_id).select_related("movie_id")
    return render(request, "userhistory.html", {"history": history})
