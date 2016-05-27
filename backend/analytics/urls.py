from django.conf.urls import url
from analytics.views import InstaUserListCreateAPIView, InstaUserDestroyAPIView, StatListAPIView

urlpatterns = [
    url(r'^insta_users/$', InstaUserListCreateAPIView.as_view()),
    url(r'^insta_users/(?P<pk>\w+)/$', InstaUserDestroyAPIView.as_view()),
    url(r'^insta_users/(?P<pk>\w+)/stat/$', StatListAPIView.as_view()),
]
