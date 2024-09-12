from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    cover_desktop = serializers.ImageField()
    """srcset_tablet = serializers.ImageField()
    srcset_mobile = serializers.ImageField()
    """

    class Meta:
        model = Project
        fields = ["url", "cover", "cover_desktop", "cover_alt", "title", "title_alt_color", "order"]
        extra_kwargs = {
            "url": {"view_name": "project-detail", "lookup_field": "id"},
        }

    def to_representation(self, instance):
        return super().to_representation(instance)
