from rest_framework import serializers

from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    srcset_desktop = serializers.ImageField()
    srcset_tablet = serializers.ImageField()
    srcset_mobile = serializers.ImageField()

    class Meta:
        model = Review
        fields = ["src", "srcset_desktop", "srcset_tablet", "srcset_mobile", "alt", "text", "name"]
