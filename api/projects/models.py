from django.db import models
from imagekit.models import ImageSpecField, ProcessedImageField
from imagekit.processors import ResizeToFit


class Project(models.Model):
    """Описание модели проектов"""

    cover = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 1152px",
        upload_to="projects",
        blank=True,
    )
    cover_webp = ImageSpecField(
        source="cover", processors=[ResizeToFit(None, 336)], format="WEBP", options={"quality": 100}
    )

    cover_960 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 960px",
        upload_to="projects",
        blank=True,
    )
    cover_960_webp = ImageSpecField(
        source="cover_960", processors=[ResizeToFit(None, 336)], format="WEBP", options={"quality": 100}
    )

    cover_740 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 740px",
        upload_to="projects",
        blank=True,
    )
    cover_740_webp = ImageSpecField(
        source="cover_740", processors=[ResizeToFit(None, 336)], format="WEBP", options={"quality": 100}
    )

    cover_560 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 560px",
        upload_to="projects",
        blank=True,
    )
    cover_560_webp = ImageSpecField(
        source="cover_560", processors=[ResizeToFit(None, 336)], format="WEBP", options={"quality": 100}
    )

    cover_380 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 380px",
        upload_to="projects",
        blank=True,
    )
    cover_380_webp = ImageSpecField(
        source="cover_380", processors=[ResizeToFit(None, 336)], format="WEBP", options={"quality": 100}
    )

    cover_314 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 314px",
        upload_to="projects",
        blank=True,
    )
    cover_314_webp = ImageSpecField(
        source="cover_314", processors=[ResizeToFit(None, 336)], format="WEBP", options={"quality": 100}
    )

    cover_alt = models.CharField(max_length=500, verbose_name="Альтернативный текст обложки")
    title = models.CharField(max_length=500, verbose_name="Заголовок проекта")
    title_alt_color = models.BooleanField(default=False, verbose_name="Заголовок белого цвета")
    # title = models.TextField(max_length=500, verbose_name="Текст отзыва")
    order = models.PositiveIntegerField(default=0, verbose_name="Порядок")

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"

    def __str__(self):
        return self.title
