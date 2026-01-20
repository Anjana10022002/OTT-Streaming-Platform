from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from adminApp.models import User, Movie
from rest_framework import serializers  

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
