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
    cover_webp = ImageSpecField(source="cover", format="WEBP", options={"quality": 100})
    # processors=[ResizeToFit(None, 336)],
    cover_960 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 960px",
        upload_to="projects",
        blank=True,
    )
    cover_960_webp = ImageSpecField(source="cover_960", format="WEBP", options={"quality": 100})

    cover_740 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 740px",
        upload_to="projects",
        blank=True,
    )
    cover_740_webp = ImageSpecField(source="cover_740", format="WEBP", options={"quality": 100})

    cover_560 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 560px",
        upload_to="projects",
        blank=True,
    )
    cover_560_webp = ImageSpecField(source="cover_560", format="WEBP", options={"quality": 100})

    cover_380 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 380px",
        upload_to="projects",
        blank=True,
    )
    cover_380_webp = ImageSpecField(source="cover_380", format="WEBP", options={"quality": 100})

    cover_314 = ProcessedImageField(
        verbose_name="Обложка проекта для экранов c шириной контента 314px",
        upload_to="projects",
        blank=True,
    )
    cover_314_webp = ImageSpecField(source="cover_314", format="WEBP", options={"quality": 100})
    cover_alt = models.CharField(max_length=500, verbose_name="Альтернативный текст обложки")

    title = models.CharField(max_length=500, verbose_name="Заголовок проекта")
    title_alt_color = models.BooleanField(default=False, verbose_name="Заголовок белого цвета")
    order = models.PositiveIntegerField(default=0, verbose_name="Порядок")

    enable_detail = models.BooleanField(default=False, verbose_name="Включить детальное описание проекта")
    project_link = models.URLField(verbose_name="Ссылка на проект", blank=True)

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"

    def __str__(self):
        return self.title


class Feature(models.Model):
    """Описание модели особенностей проектов"""

    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="features", verbose_name="Проект")
    title = models.CharField(max_length=1000, verbose_name="Особенность проекта")

    class Meta:
        verbose_name = "Особенность проекта"
        verbose_name_plural = "Особенности проекта"

    def __str__(self):
        return self.title


class Presentation(models.Model):
    """Описание модели презентаций проектов"""

    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="images", verbose_name="Проект")
    image = ProcessedImageField(
        verbose_name="Презентация проекта",
        upload_to="presentations",
        blank=True,
    )
    image_webp = ImageSpecField(source="image", format="WEBP", options={"quality": 100})
    alt = models.CharField(max_length=500, verbose_name="Альтернативный текст изображения")

    class Meta:
        verbose_name = "Презентация проекта"
        verbose_name_plural = "Презентации проекта"

    def __str__(self):
        return self.alt
