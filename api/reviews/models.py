from django.db import models
from imagekit.models import ImageSpecField, ProcessedImageField
from imagekit.processors import ResizeToFit


class Review(models.Model):
    """Описание модели галереи"""

    """ src = ProcessedImageField(
        verbose_name="Фотография для галереи",
        upload_to="reviews",
        blank=True,
    )
    srcset_desktop = ImageSpecField(
        source="src", processors=[ResizeToFit(515, None)], format="WEBP", options={"quality": 100}
    )
    srcset_tablet = ImageSpecField(
        source="src", processors=[ResizeToFit(368, None)], format="WEBP", options={"quality": 100}
    )
    srcset_mobile = ImageSpecField(
        source="src", processors=[ResizeToFit(314, None)], format="WEBP", options={"quality": 100}
    ) 
    alt = models.CharField(max_length=255, verbose_name="Альтернативный текст", blank=True)"""

    video_file = models.FileField(
        verbose_name="Видео-отзыв, в формате mp4",
        upload_to="videoreviews",
        blank=True,
        null=True,
    )
    text = models.TextField(max_length=500, verbose_name="Текст отзыва", blank=True, null=True)
    name = models.CharField(max_length=100, verbose_name="Имя клиента")

    class Meta:
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"
