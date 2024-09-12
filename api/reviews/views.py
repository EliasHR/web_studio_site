from django.shortcuts import render
from rest_framework import generics

from .models import Review
from .serializers import ReviewSerializer


# Create your views here.
class ReviewAPIView(generics.ListAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
