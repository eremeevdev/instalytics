from rest_framework.serializers import ModelSerializer
from analytics.models import InstaUser, Stat, ChangeLog


class InstaUserSerializer(ModelSerializer):
    class Meta:
        model = InstaUser
        fields = ('username', 'profile_pic_url', 'full_name')


class StatSerializer(ModelSerializer):
    class Meta:
        model = Stat
        fields = ('followed_by', 'follows', 'media_count', 'date')


class ChangeLogSerializer(ModelSerializer):
    class Meta:
        model = ChangeLog
        fields = ('datetime', 'change')
