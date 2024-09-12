from django.urls import include, path

from .views import ProjectListAPIView, ProjectRetrieveAPIView

urlpatterns = [
    path(
        "projects/",
        include(
            [
                path("", ProjectListAPIView.as_view(), name="project-list"),
                path("<int:id>", ProjectRetrieveAPIView.as_view(), name="project-detail"),
            ]
        ),
    ),
]
