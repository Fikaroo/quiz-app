from rest_framework import serializers
from core.models import *
from pprint import pprint

class RecursiveSerializer(serializers.Serializer):
    
    def to_representation(self, instance):
        serializer=self.parent.parent.__class__(instance,context=self.context)
        return serializer.data


class CategoryListSerializer(serializers.ModelSerializer):
    children=RecursiveSerializer(many=True, read_only=True)

    class Meta:
        model=Category
        fields=('id','name','children','slug')

class AnswerListSerializer(serializers.ModelSerializer):
    class Meta:
        model=Answer
        exclude=["question"]
        
class QuestionListSerializer(serializers.ModelSerializer):
    answers=AnswerListSerializer(many=True, read_only=True)
    
    class Meta:
        model=Question
        exclude=["created_time", "updated_time", "category"]

class CategoryQuestionSerializer(serializers.ModelSerializer):
    questions=QuestionListSerializer(many=True, read_only=True)

    class Meta:
        model=Category
        fields=('id','name','slug','questions')
