import json
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Region, Office


class RegionView(APIView):
    
    def get(self, request, format=None):
        features = []
        for region in Region.objects.all():
            features.append({"type": "Feature", "geometry": json.loads(region.polygon.json), "properties": {"name": region.name }})

        return Response(
            {
              "type": "FeatureCollection",
              "name": "OBN Regions",
              "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
              "features": features
            }
        )


class OfficeView(APIView):
    
    def get(self, request, format=None):
        features = []
        for office in Office.objects.all():
            features.append({"type": "Feature", "geometry": office.point.json, "properties": {"Name": office.name, "Level": Office.Level.labels.get(office.level), "Lat": office.point.coords[1], "Lon": office.point.coords[0]}})

        return Response(
            {
              "type": "FeatureCollection",
              "name": "OBN Offices",
              "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
              "features": features
            }
        )