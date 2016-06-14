from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField


class InstaUser(models.Model):

    username = models.CharField(max_length=64, primary_key=True)

    biography = models.TextField(blank=True)
    external_url = models.URLField(blank=True)
    full_name = models.CharField(max_length=128, blank=True)
    profile_pic_url = models.URLField(blank=True)

    user = models.ForeignKey(User)

    def __str__(self):
        return self.username


class Stat(models.Model):

    user = models.ForeignKey(InstaUser)

    followed_by = models.IntegerField()
    follows = models.IntegerField()
    media_count = models.IntegerField()

    date = models.DateField()

    def __str__(self):
        return '{}: {}, {}, {}'.format(self.user, self.followed_by,
                                       self.follows, self.media_count)


class ChangeLog(models.Model):

    user = models.ForeignKey(InstaUser)
    datetime = models.DateTimeField(default=timezone.now)
    change = JSONField()

    def __str__(self):
        return '{}: {}'.format(self.user, self.value)
