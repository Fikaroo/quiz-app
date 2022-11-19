from rest_framework import generics,permissions
from rest_framework.response import Response
from core.api.serializers import *
from core.models import *

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.filter(parent=None) 
    serializer_class = CategoryListSerializer 
    
    def get_queryset(self):

        try:
            category_slug=self.kwargs['category_slug']
            return Category.objects.filter(parent=None,slug=category_slug)
        except:
            return Category.objects.filter(parent=None) 

        


class QuestionListAPIView(generics.ListAPIView):
    queryset=Question.objects.all()
    serializer_class=QuestionListSerializer
