from django.conf.urls import url

from rest_framework.authtoken import views

from analytics.views import (
    InstaUserListCreateAPIView, InstaUserDestroyAPIView, StatListAPIView,
    ChangeLogListAPIView
)

urlpatterns = [
    url(r'^insta_users/$', InstaUserListCreateAPIView.as_view()),
    url(r'^insta_users/(?P<pk>\w+)/$', InstaUserDestroyAPIView.as_view()),
    url(r'^insta_users/(?P<pk>\w+)/stat/$', StatListAPIView.as_view()),
    url(r'^insta_users/(?P<pk>\w+)/log/$', ChangeLogListAPIView.as_view()),
    url(r'^token_auth/$', views.obtain_auth_token),
]
