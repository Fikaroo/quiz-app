from rest_framework import serializers
from core.models import *
from pprint import pprint

class RecursiveSerializer(serializers.Serializer):
    
    def to_representation(self, instance):
        pprint( instance.__dict__)
        serializer=self.parent.parent.__class__(instance,context=self.context)
        return serializer.data


class CategoryListSerializer(serializers.ModelSerializer):
    children=RecursiveSerializer(many=True, read_only=True)

    class Meta:
        model=Category
        fields=('id','name','children','slug')


class QuestionListSerializer(serializers.ModelSerializer):
    category=serializers.StringRelatedField()

    class Meta:
        model=Question
        fields="__all__"
