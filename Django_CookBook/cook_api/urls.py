
from django.urls import path
from .views import *

urlpatterns = [
    path('cats/', CategoryView.as_view()),
    path('cats/<int:pk>/', OneCategoryView.as_view()),
    path('recipes/', RecipeView.as_view()),
    path('recipes/<int:pk>/', RecipeDetail.as_view()),
    path('cats/<int:pk>/recipes/', RecipeByCategoryList.as_view())
]
