# Generated by Django 3.1.4 on 2020-12-06 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offices', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='office',
            name='staff_number',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='region',
            name='staff_number',
            field=models.IntegerField(null=True),
        ),
    ]
