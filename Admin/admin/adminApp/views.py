from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout 

# def login_page(request):
#     return render(request, './login.html')
# def home_page(request):
#     return render(request, './home.html')
def movielist_page(request):
    return render(request, './movielist.html')
def userlist_page(request):
    return render(request, './userlist.html')
def report_page(request):
    return render(request, './report.html')
def movieview_page(request):
    return render(request, './movieview.html')
def change_password(request):
    return render(request, './passwordchange.html')
# def logout_view(request):
#     redirect('login')
def add_movie(request):
    return render(request, './addmovie.html')


from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from rest_framework.authtoken.models import Token
from .models import User
from django.contrib.auth import authenticate, login

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