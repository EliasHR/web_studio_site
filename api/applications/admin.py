import locale

from django.contrib import admin

from .models import Application


@admin.action(description="Отметить обработаным")
def make_processed(modeladmin, request, queryset):
    queryset.update(processed=True)


@admin.action(description="Отметить необработаным")
def make_unprocessed(modeladmin, request, queryset):
    queryset.update(processed=False)


# Register your models here.
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ["processed", "name", "phone", "type_app", "formatted_date"]
    list_display_links = ["name", "phone"]
    readonly_fields = ("name", "phone", "message", "date", "type_app")
    search_fields = ("name", "phone", "message")
    list_filter = ("processed", "date")
    date_hierarchy = "date"
    actions = [make_processed, make_unprocessed]

    def formatted_date(self, obj):
        return obj.date.strftime("%d-%m-%Y %H:%M:%S")

    formatted_date.short_description = "Дата и время"
    formatted_date.admin_order_field = "date"


# Register your modem e.
admin.site.register(Application, ApplicationAdmin)
