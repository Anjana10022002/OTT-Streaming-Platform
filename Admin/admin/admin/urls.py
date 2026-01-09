"""
URL configuration for admin project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from adminApp import views

urlpatterns = [
    path('', views.login_page, name='login'),
    path('home/', views.home_page, name='home'),
    path('movielist/', views.movielist_page, name='movielist'),
    path('userlist/', views.userlist_page, name='userlist'),
    path('report/', views.report_page, name='report'),
    path('movieview/', views.movieview_page, name='movieview'),
    path('chagepassword/', views.change_password, name='changepassword'),
    path('logout/', views.logout_view, name='logout'),
]
