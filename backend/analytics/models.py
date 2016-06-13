from django.db import models
from django.utils import timezone
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


class Change(models.Model):

    TARGET_BIO = 0
    TARGET_URL = 1
    TARGET_AVATAR = 2

    TARGET_CHOICES = (
        ('Bio', TARGET_BIO),
        ('URL', TARGET_URL),
        ('Avatar', TARGET_AVATAR),
    )

    user = models.ForeignKey(InstaUser)
    datetime = models.DateTimeField(default=timezone.now)
    target = models.IntegerField(choices=TARGET_CHOICES)
    value = models.TextField()

    def __str__(self):
        return '{}: {}'.target(self.user, self.value)
