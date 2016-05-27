from rest_framework.generics import ListCreateAPIView, DestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from analytics.models import InstaUser, Stat
from analytics.serializers import InstaUserSerializer, StatSerializer


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


class StatListAPIView(ListAPIView):

    serializer_class = StatSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Stat.objects.filter(user_id=pk).order_by('-date')
