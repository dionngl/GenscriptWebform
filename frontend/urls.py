from django.urls import path, include
from .views import index

urlpatterns = [
    path('', index),
    path('ConstructDesigner', index),
    path('ConstructReviewer', index),
    path('PDFReviewer', index),
]