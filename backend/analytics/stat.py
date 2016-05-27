import re
import json
import requests

BASE_URL = 'https://www.instagram.com'


def get_stat(username):

    url = '{}/{}/'.format(BASE_URL, username)

    resp = requests.get(url)

    match = re.search('window\._sharedData = (?P<data>.*);</script>', resp.content.decode('utf-8'))

    data = json.loads(match.group('data'))

    user = data['entry_data']['ProfilePage'][0]['user']

    return {
        'followed_by': user['followed_by']['count'],
        'follows': user['follows']['count'],
        'media_count': user['media']['count']
    }


if __name__ == '__main__':
    stat = get_stat('heckf')
    print(stat)
