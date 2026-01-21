from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from adminApp.models import User, Movie, WatchHistory
from rest_framework import serializers  

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class WatchHistorySerializer(serializers.ModelSerializer):
    movie_title = serializers.CharField(source="movie_id.title", read_only=True)
    thumbnail = serializers.FileField(source="movie_id.thumbnail", read_only=True)

    class Meta:
        model = WatchHistory
        fields = "__all__"