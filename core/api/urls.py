from django.urls import path,include
from core.api import views as api_views
urlpatterns = [
    path('category/', api_views.CategoryListAPIView.as_view()),
    path('category/<slug:category_slug>', api_views.CategoryListAPIView.as_view()),
    # path('questions/',api_views.QuestionListAPIView.as_view()),
    path('questions-list/<slug:question_category_slug>/<slug:language_slug>',api_views.CategoryQuestionListAPIView.as_view())
]