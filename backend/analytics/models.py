from django.db import models
from django.contrib.auth.models import User


class InstaUser(models.Model):

    username = models.CharField(max_length=64, primary_key=True)
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
        return '{}: {}, {}, {}'.format(self.user, self.followed_by, self.follows, self.media_count)
