from django.db import models


class User(models.Model):

    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=64)

    def __str__(self):
        return self.username


class Stat(models.Model):

    user = models.ForeignKey(User)

    followed_by = models.IntegerField()
    follows = models.IntegerField()
    media_count = models.IntegerField()

    date = models.DateField()

    def __str__(self):
        return '{}: {}, {}, {}'.format(self.user, self.followed_by, self.follows, self.media_count)
