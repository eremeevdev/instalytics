from rest_framework.generics import ListCreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from analytics.models import InstaUser
from analytics.serializers import InstaUserSerializer


class InstaUserListCreateAPIView(ListCreateAPIView):

    serializer_class = InstaUserSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return InstaUser.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class InstaUserDestroyAPIView(DestroyAPIView):

    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return InstaUser.objects.filter(user=self.request.user)
