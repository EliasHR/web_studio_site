from django.contrib import admin
from .models import Review


class ReviewAdmin(admin.ModelAdmin):
    list_display = ["name", "text"]


# Register your modem e.
admin.site.register(Review, ReviewAdmin)
