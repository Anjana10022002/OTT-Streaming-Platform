from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.Signup, name='signup_api'),
    path('login/', views.Login, name='login_api'), 
    path('movieList/', views.movie_list, name='movie_list_api'),
    path('movieID/<int:movie_id>/', views.movie_by_id, name='movie_detail_api'),
    path('watchlist/add/', views.add_to_watchlist, name='add_to_watchlist_api'),
]
