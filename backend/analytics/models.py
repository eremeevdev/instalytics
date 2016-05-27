from django.db import models


class User(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=64)


class Stat(models.Model):
    followed_by = models.IntegerField()
    follows = models.IntegerField()
    media_count = models.IntegerField()
