from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from adminApp.models import User
from rest_framework import serializers  


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'  
