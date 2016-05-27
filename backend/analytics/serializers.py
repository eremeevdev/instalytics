from rest_framework.serializers import ModelSerializer
from analytics.models import InstaUser


class InstaUserSerializer(ModelSerializer):
    class Meta:
        model = InstaUser
        fields = ('username',)
