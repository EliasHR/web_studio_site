from rest_framework import serializers

from .models import Project, Feature, Presentation


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    cover_webp = serializers.ImageField()
    cover_960_webp = serializers.ImageField()
    cover_560_webp = serializers.ImageField()
    cover_740_webp = serializers.ImageField()
    cover_380_webp = serializers.ImageField()
    cover_314_webp = serializers.ImageField()

    class Meta:
        model = Project
        fields = [
            "url",
            "cover",
            "cover_webp",
            "cover_960",
            "cover_960_webp",
            "cover_740",
            "cover_740_webp",
            "cover_560",
            "cover_560_webp",
            "cover_380",
            "cover_380_webp",
            "cover_314",
            "cover_314_webp",
            "cover_alt",
            "title",
            "title_alt_color",
            "order",
            "enable_detail",
        ]
        extra_kwargs = {
            "url": {"view_name": "project-detail", "lookup_field": "id"},
        }

    def to_representation(self, instance):
        return super().to_representation(instance)


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ["title"]


class PresentationSerializer(serializers.ModelSerializer):
    image_webp = serializers.ImageField()

    class Meta:
        model = Presentation
        fields = ["image", "image_webp", "alt"]


class ProjectDetailSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True, read_only=True)
    images = PresentationSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ["title", "project_link", "features", "images"]
