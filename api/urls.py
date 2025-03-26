from django.urls import path
from .views import GenscriptEntryView, CreateGenscriptEntryView, main

urlpatterns = [
    path('', main),
    path('genscript_entry/', GenscriptEntryView.as_view()),
    path('genscript/', CreateGenscriptEntryView.as_view())
]
