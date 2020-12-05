from django.contrib.gis.db import models
from djchoices import DjangoChoices, ChoiceItem

class Office(models.Model):
    class Level(DjangoChoices):
        head_office = ChoiceItem("head_office", "Head Office")
        regional_office = ChoiceItem("regional_office", "Regional Office")
        ordinary_office = ChoiceItem("ordinary_office", "Ordinary Office")

    name = models.CharField(max_length=100)
    level = models.CharField(max_length=40, choices=Level.choices)
    point = models.PointField()

    def __str__(self):
        return self.name


class Region(models.Model):
    name = models.CharField(max_length=100)
    polygon = models.PolygonField()

    def __str__(self):
        return self.name