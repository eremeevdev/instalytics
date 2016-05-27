from rest_framework.serializers import ModelSerializer
from analytics.models import InstaUser, Stat


class InstaUserSerializer(ModelSerializer):
    class Meta:
        model = InstaUser
        fields = ('username',)


class StatSerializer(ModelSerializer):
    class Meta:
        model = Stat
        fields = ('followed_by', 'follows', 'media_count', 'date')
