from django.contrib import admin

from .models import Project, Feature, Presentation


class FeatureInline(admin.TabularInline):
    model = Feature
    extra = 1  # Количество пустых форм для добавления новых объектов


class PresentationInline(admin.TabularInline):
    model = Presentation
    extra = 1


# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "cover", "order"]
    inlines = [FeatureInline, PresentationInline]
    # list_display_links = ["name", "phone"]
    # readonly_fields = ("name", "phone", "tree_type", "date")
    # search_fields = ("name", "phone", "tree_type")
    # list_filter = ("processed", "date", "tree_type")
    # date_hierarchy = "date"
    # actions = [make_processed, make_unprocessed]

    fieldsets = (
        (
            "Обложка проекта",
            {
                "fields": ("cover", "cover_960", "cover_740", "cover_560", "cover_380", "cover_314", "cover_alt"),
                "description": "Загрузите изображения обложки проекта в различных разрешениях.",
            },
        ),
        (
            "Основная информация",
            {
                "fields": ("title", "title_alt_color", "order", "enable_detail"),
                "description": "Основные параметры проекта, такие как название, порядок и включение детального описания.",
            },
        ),
        (
            "Информация для детального описания",
            {
                "fields": ("project_link",),
                "description": "Информация для детального описания проекта.",
            },
        ),
    )

    """ def formatted_date(self, obj):
        return obj.date.strftime("%d-%m-%Y %H:%M:%S")

    formatted_date.short_description = "Дата и время"
    formatted_date.admin_order_field = "date" """


# Register your modem e.
admin.site.register(Project, ProjectAdmin)
