from django.conf.urls import url
from analytics.views import InstaUserListCreateAPIView, InstaUserDestroyAPIView

urlpatterns = [
    url(r'^insta_users$', InstaUserListCreateAPIView.as_view()),
    url(r'^insta_users/(?P<pk>\S+)$', InstaUserDestroyAPIView.as_view()),
]
