from logging import getLogger
from django.core.management.base import BaseCommand

logger = getLogger(__name__)


class Command(BaseCommand):

    help = "Update user's instagram stat"

    def handle(self, *args, **kwargs):
        logger.debug("update stat")
