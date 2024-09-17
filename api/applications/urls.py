from django.urls import path

from .views import ApplicationCreateAPIView


urlpatterns = [
    path("send_application/", ApplicationCreateAPIView.as_view(), name="send-application"),
]
