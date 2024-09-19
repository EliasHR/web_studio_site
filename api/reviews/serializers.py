from rest_framework import serializers

from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    """srcset_desktop = serializers.ImageField()
    srcset_tablet = serializers.ImageField()
    srcset_mobile = serializers.ImageField()"""

    video_poster_webp = serializers.ImageField()

    class Meta:
        model = Review
        fields = ["text", "video_file", "video_poster", "video_poster_webp", "name"]
