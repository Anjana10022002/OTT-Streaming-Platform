from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.Signup, name='signup_api'),
    path('login/', views.Login, name='login_api'), 
    path('movieList/', views.movie_list, name='movie_list_api'),
]