from django.contrib import admin
from core.models import Category, Question, Answer
# Register your models here.
class QuestionAdmin(admin.ModelAdmin):
    list_display=('category','text','image','score','created_time','language','updated_time')

class AnswerAdmin(admin.ModelAdmin):
    list_display=('question','answer_text','correct_answer')
    
admin.site.register(Category)
admin.site.register(Question,QuestionAdmin)
admin.site.register(Answer,AnswerAdmin) 
