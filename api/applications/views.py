import requests
from django.shortcuts import render
from api.settings import CHAT_ID, TG_BOT_TOKEN
from rest_framework import generics

from .models import Application
from .serializers import ApplicationSerializer


class ApplicationCreateAPIView(generics.CreateAPIView):
    serializer_class = ApplicationSerializer

    def perform_create(self, serializer):
        application = serializer.save()
        send_message_to_tg(application)


def send_message_to_tg(application):
    """
    Эта функция отправляет сообщение пользователю Telegram с указанным именем,
    номером телефона и сообщением.

    :param name: Строка, представляющая имя получателя, которому будет
    отправлено сообщение
    :param phone: Параметр `phone` должен быть номером телефона получателя,
    которому вы хотите отправить сообщение
    :param message: Параметр сообщения должен представлять собой строку,
    содержащую сообщение, которое вы хотите отправить пользователю Telegram.
    Это может быть любой текст или информация, которую вы хотите сообщить
    пользователю
    """

    url = f"https://api.telegram.org/bot{TG_BOT_TOKEN}/sendMessage"
    data = {
        "chat_id": CHAT_ID,
        "parse_mode": "HTML",
        "text": (
            "Пришло обращение на сайте!\n"
            f"<b>Имя:</b> {application.name}\n"
            f"<b>Телефон:</b> {application.phone}\n"
            f"<b>Сообщение:</b> {application.message}\n"
            f"<b>Тип обращения:</b> {application.get_type_app_display()}\n"
            "Не забудь зайти проверить."
        ),
    }
    response = requests.post(url, data=data, timeout=10)
    if response.status_code == 200:
        return True
    else:
        return False
