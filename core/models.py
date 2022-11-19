from django.db import models
from mptt.models import MPTTModel, TreeForeignKey

# Create your models here.
class Category(MPTTModel):
    name = models.CharField(max_length=100)
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    slug=models.SlugField(max_length=50, null=True, blank=True)

    def __str__(self) -> str:
        return self.name

class Question(models.Model):
    category=models.ForeignKey(
        Category,on_delete=models.CASCADE
        )
    text= models.CharField(max_length=140)
    image = models.FileField(
        blank=True, null=True, verbose_name='Şəkil əlavə etmək:'
        )
    score=models.DecimalField(max_digits=6, decimal_places=2)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time =  models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.text

class Answer(models.Model):
    question=models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    answer_text=models.CharField(max_length=100)
    correct_answer=models.BooleanField()

