
from django.urls import path, include
from django.http import HttpResponse
from core import views
urlpatterns = [
    path('', views.home)
]
