from django.conf.urls import url
from . import views

app_name = "menu"

urlpatterns = [
    url(
        "regions/$",
        views.RegionView.as_view(),
        name="regions-list",
    ),
    url(
        "offices/$",
        views.RegionView.as_view(),
        name="regions-list",
    )
]
