from django.core.management.base import BaseCommand
from analytics.stat import update_stat


class Command(BaseCommand):

    help = "Update user's instagram stat"

    def handle(self, *args, **kwargs):
        update_stat()
