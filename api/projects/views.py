from rest_framework import generics, views
from rest_framework.response import Response

from .models import Project
from .serializers import ProjectSerializer, ProjectDetailSerializer


# Create your views here.
class ProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all().order_by("order")


# Create your views here.
class ProjectRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = ProjectDetailSerializer
    lookup_field = "id"
    queryset = Project.objects.all()
