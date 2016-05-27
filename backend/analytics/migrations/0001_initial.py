# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-05-27 20:29
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('followed_by', models.IntegerField()),
                ('follows', models.IntegerField()),
                ('media_count', models.IntegerField()),
                ('date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=64)),
            ],
        ),
        migrations.AddField(
            model_name='stat',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='analytics.User'),
        ),
    ]
