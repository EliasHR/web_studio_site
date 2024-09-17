from django.db import models


# Create your models here.
class Application(models.Model):
    """Описание модели обращений"""

    TYPE_CHOISES = [
        ("ring", "Обратный звонок"),
        ("cost", "Стоимость проекта"),
        ("app_site", "Заявка на сайт"),
        ("app_bot", "Заявка на чат-бота"),
        ("app_design", "Заявка на дизайн"),
        ("app", "Заявка общая"),
        ("business", "Проблемы бизнеса")
    ]

    name = models.CharField(max_length=50, verbose_name="Имя пользователя")
    phone = models.TextField(max_length=16, verbose_name="Номер телефона")
    message = models.CharField(max_length=1000**2, verbose_name="Сообщение", blank=True)
    type_app = models.CharField(max_length=10, choices=TYPE_CHOISES, verbose_name="Тип обращения", default="RING")
    date = models.DateTimeField(auto_now_add=True, verbose_name="Дата")
    processed = models.BooleanField(default=False, verbose_name="Статус обработки")

    class Meta:
        verbose_name = "Обращения"
        verbose_name_plural = "Обращения"

    def __str__(self) -> str:
        return f"{self.name} ({self.phone})"
