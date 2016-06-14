from django.contrib import admin
from analytics.models import InstaUser, Stat, ChangeLog

admin.site.register(InstaUser)
admin.site.register(Stat)
admin.site.register(ChangeLog)
