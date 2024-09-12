from django.db import models
from imagekit.models import ImageSpecField, ProcessedImageField
from imagekit.processors import ResizeToFit


class Project(models.Model):
    """Описание модели проектов"""

    cover = ProcessedImageField(
        verbose_name="Обложка проекта",
        upload_to="projects",
        blank=True,
    )
    cover_desktop = ImageSpecField(
        source="cover", processors=[ResizeToFit(None, 336)], format="WEBP", options={"quality": 100}
    )
    """ srcset_tablet = ImageSpecField(
        source="src", processors=[ResizeToFit(368, None)], format="WEBP", options={"quality": 100}
    )
    srcset_mobile = ImageSpecField(
        source="src", processors=[ResizeToFit(314, None)], format="WEBP", options={"quality": 100}
    ) """
    cover_alt = models.CharField(max_length=500, verbose_name="Альтернативный текст обложки")
    title = models.CharField(max_length=500, verbose_name="Заголовок проекта")
    title_alt_color = models.BooleanField(default=False, verbose_name="Заголовок белого цвета")
    # title = models.TextField(max_length=500, verbose_name="Текст отзыва")
    order = models.PositiveIntegerField(default=0, verbose_name="Порядок")

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"
