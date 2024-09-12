from django.contrib import admin

from .models import Project

# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "cover", "order"]
    #list_display_links = ["name", "phone"]
    #readonly_fields = ("name", "phone", "tree_type", "date")
    #search_fields = ("name", "phone", "tree_type")
    #list_filter = ("processed", "date", "tree_type")
    #date_hierarchy = "date"
    #actions = [make_processed, make_unprocessed]

    """ def formatted_date(self, obj):
        return obj.date.strftime("%d-%m-%Y %H:%M:%S")

    formatted_date.short_description = "Дата и время"
    formatted_date.admin_order_field = "date" """


# Register your modem e.
admin.site.register(Project, ProjectAdmin)