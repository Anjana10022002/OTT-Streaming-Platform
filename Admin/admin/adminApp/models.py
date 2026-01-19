from django.contrib.auth.models import AbstractBaseUser, BaseUserManager 
from django.db import models 

class UserManager(BaseUserManager): 
    def create_user(self, email, password=None): #User
      if not email: 
        raise ValueError("Users must have an email address") 
      email = self.normalize_email(email) 
      user = self.model(email=email) 
      user.set_password(password) 
      user.save(using=self._db) 
      return user 
    def create_superuser(self, email, password): #Admin
            user = self.create_user(email, password) 
            user.is_admin = True 
            User.is_superuser = True 
            user.save(using=self._db) 
            return user 
 
class User(AbstractBaseUser): 
    email = models.EmailField(unique=True) 
    name = models.CharField(max_length =255) 
    is_active = models.BooleanField(default=True) 
    is_admin = models.BooleanField(default=False) 
    objects = UserManager() 
 
    USERNAME_FIELD = 'email'

class Movie(models.Model):
    thumbnail = models.FileField(upload_to='thumbnails/')  
    title = models.CharField(max_length=255)
    description = models.TextField()
    video_file = models.FileField(upload_to='videos/')
    count = models.IntegerField(default=0)    

class watchlist(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    movie_id = models.ForeignKey(Movie, on_delete=models.CASCADE)

class watchHistory(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    movie_id = models.ForeignKey(Movie, on_delete=models.CASCADE)
    watched_on = models.DateTimeField(auto_now_add=True)  

