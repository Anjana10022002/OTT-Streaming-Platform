from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.Signup, name='signup_api'),
    path('login/', views.Login, name='login_api'), 
    path('movieList/', views.movie_list, name='movie_list_api'),
    path('movieID/<int:movie_id>/', views.movie_by_id, name='movie_detail_api'),
    path('watchlist/add/', views.add_to_watchlist, name='add_to_watchlist_api'),
    path('watchlist/<int:user_id>/', views.view_watchlist, name='view_watchlist_api'),
    path('watchlist/remove/', views.remove_from_watchlist, name='remove_watchlist_api'),
    path('history/<int:user_id>/', views.view_history, name='view_history_api'),
    path('history/add/', views.add_history, name='add_history_api'),
    path('changePassword/', views.change_password, name='change_password_api'),
    path('movie/search/', views.search_movies, name ='search_movies')
]



# api for searching movies by title
# python manage.py create superuser for creating admin