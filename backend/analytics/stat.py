import re
import json
import requests

from datetime import datetime

from analytics.models import InstaUser, Stat, ChangeLog

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
        'profile_pic_url': profile_data.get('profile_pic_url_hd') or profile_data.get('profile_pic_url')
    }


def update_info():

    today = datetime.now().date()

    for user in InstaUser.objects.all():

        # all info about instagram uer
        profile_data = get_profile(user.username)

        # stat info for Stat model
        profile_stat = get_stat(profile_data)
        Stat.objects.update_or_create(user_id=user.username, date=today,
                                      defaults=profile_stat)

        # user profile info
        profile_info = get_profile_info(profile_data)

        changed = {}

        for field, value in profile_info.items():

            new_value = value or ''

            current_value = getattr(user, field)

            if current_value != new_value:
                setattr(user, field, new_value)
                changed[field] = new_value

        if changed:
            user.save()
            ChangeLog.objects.create(user=user, change=changed)
