from django.shortcuts import render
from rest_framework import generics
from .models import Category, Recipe
from .serializer import CategorySerializer, RecipeSerializer

class CategoryView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class OneCategoryView(generics.RetrieveAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.filter(id=self.kwargs['pk'])

class RecipeView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeByCategoryList(generics.ListAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        cat_pk = self.kwargs['pk']
        return Recipe.objects.filter(category_id=cat_pk)