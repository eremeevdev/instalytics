import re
import json
import requests

from datetime import datetime

from analytics.models import InstaUser, Stat

BASE_URL = 'https://www.instagram.com'


def get_profile(username):

    url = '{}/{}/'.format(BASE_URL, username)

    resp = requests.get(url)

    match = re.search('window\._sharedData = (?P<data>.*);</script>',
                      resp.content.decode('utf-8'))

    data = json.loads(match.group('data'))

    return data['entry_data']['ProfilePage'][0]['user']


def get_stat(profile_data):

    return {
        'followed_by': profile_data['followed_by']['count'],
        'follows': profile_data['follows']['count'],
        'media_count': profile_data['media']['count']
    }


def get_profile_info(profile_data):

    return {
        'biography': profile_data['biography'],
        'external_url': profile_data['external_url'],
        'full_name': profile_data['full_name'],
        'profile_pic_url': profile_data['profile_pic_url_hd'],
    }


def update_stat():

    today = datetime.now().date()

    for user in InstaUser.objects.all():
        stat = get_stat(user.username)
        Stat.objects.update_or_create(user_id=user.username, date=today,
                                      defaults=stat)
