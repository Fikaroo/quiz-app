from django.db.models import Prefetch
from rest_framework import generics,permissions
from rest_framework.response import Response
from core.api.serializers import *
from core.models import *

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.select_related().filter(parent=None) 
    serializer_class = CategoryListSerializer 
    
    def get_queryset(self):
        try:
            category_slug=self.kwargs['category_slug']
            return Category.objects.filter(parent=None, slug=category_slug)
        except:
            return Category.objects.filter(parent=None) 

class CategoryQuestionListAPIView(generics.ListAPIView):
    queryset = Category.objects.exclude(parent=None) 
    serializer_class=CategoryQuestionSerializer
    
    def get_queryset(self):
        category=self.kwargs['question_category_slug']
        language=self.kwargs['language_slug']
        return Category.objects.exclude(parent=None).filter(slug=category).prefetch_related(
             Prefetch('questions', queryset=Question.objects.filter(language=language))
        )
