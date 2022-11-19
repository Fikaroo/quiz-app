from django.contrib import admin
from core.models import Category, Question, Answer
# Register your models here.
class QuestionAdmin(admin.ModelAdmin):
    list_display=('category','text','image','score','created_time','updated_time')
    
admin.site.register((Category,Answer))
admin.site.register(Question,QuestionAdmin)
