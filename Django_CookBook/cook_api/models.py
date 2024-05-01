from django.db import models
# from django.urls import reverse


class Category(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    recipe = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title