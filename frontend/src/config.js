const config = {
    "version": "v1",
    "config": {
        "visState": {
            "filters": [],
            "layers": [{
                "id": "3t8wkt",
                "type": "point",
                "config": {
                    "dataId": "ngo-x-offices",
                    "label": "Point",
                    "color": [255, 203, 153],
                    "columns": {
                        "lat": "lat",
                        "lng": "lon",
                        "altitude": null
                    },
                    "isVisible": false,
                    "visConfig": {
                        "radius": 10,
                        "fixedRadius": false,
                        "opacity": 0.8,
                        "outline": false,
                        "thickness": 2,
                        "strokeColor": null,
                        "colorRange": {
                            "name": "Global Warming",
                            "type": "sequential",
                            "category": "Uber",
                            "colors": ["#5A1846", "#900C3F", "#C70039", "#E3611C", "#F1920E", "#FFC300"]
                        },
                        "strokeColorRange": {
                            "name": "Global Warming",
                            "type": "sequential",
                            "category": "Uber",
                            "colors": ["#5A1846", "#900C3F", "#C70039", "#E3611C", "#F1920E", "#FFC300"]
                        },
                        "radiusRange": [0, 50],
                        "filled": true
                    },
                    "hidden": false,
                    "textLabel": [{
                        "field": null,
                        "color": [255, 255, 255],
                        "size": 18,
                        "offset": [0, 0],
                        "anchor": "start",
                        "alignment": "center"
                    }]
                },
                "visualChannels": {
                    "colorField": null,
                    "colorScale": "quantile",
                    "strokeColorField": null,
                    "strokeColorScale": "quantile",
                    "sizeField": null,
                    "sizeScale": "linear"
                }
            }, {
                "type": "point",
                "config": {
                    "dataId": "ngo-x-offices",
                    "label": "NGO X Offices",
                    "color": [203, 56, 11],
                    "columns": {
                        "lat": "Lat",
                        "lng": "Lon",
                        "altitude": null
                    },
                    "isVisible": true,
                    "visConfig": {
                        "radius": 20.1,
                        "fixedRadius": false,
                        "opacity": 0.98,
                        "outline": false,
                        "thickness": 0.5,
                        "strokeColor": [137, 218, 193],
                        "colorRange": {
                            "name": "Global Warming",
                            "type": "sequential",
                            "category": "Uber",
                            "colors": ["#5A1846", "#900C3F", "#C70039", "#E3611C", "#F1920E", "#FFC300"]
                        },
                        "strokeColorRange": {
                            "name": "Global Warming",
                            "type": "sequential",
                            "category": "Uber",
                            "colors": ["#5A1846", "#900C3F", "#C70039", "#E3611C", "#F1920E", "#FFC300"]
                        },
                        "radiusRange": [0, 50],
                        "filled": true
                    },
                    "hidden": false,
                    "textLabel": []
                },
                "visualChannels": {
                    "colorField": {
                        "name": "name",
                        "type": "string"
                    },
                    "colorScale": "ordinal",
                    "strokeColorField": null,
                    "strokeColorScale": "quantile",
                    "sizeField": null,
                    "sizeScale": "linear"
                }
            }, {
                "type": "geojson",
                "config": {
                    "dataId": "ngo-x-regions",
                    "label": "NGO X Regions",
                    "color": [130, 154, 227],
                    "columns": {
                        "geojson": "_geojson"
                    },
                    "isVisible": true,
                    "visConfig": {
                        "opacity": 0.8,
                        "strokeOpacity": 0.8,
                        "thickness": 0.6,
                        "strokeColor": [231, 159, 213],
                        "colorRange": {
                            "name": "Global Warming",
                            "type": "sequential",
                            "category": "Uber",
                            "colors": ["#5A1846", "#900C3F", "#C70039", "#E3611C", "#F1920E", "#FFC300"]
                        },
                        "strokeColorRange": {
                            "name": "Global Warming",
                            "type": "sequential",
                            "category": "Uber",
                            "colors": ["#5A1846", "#900C3F", "#C70039", "#E3611C", "#F1920E", "#FFC300"]
                        },
                        "radius": 10,
                        "sizeRange": [0, 10],
                        "radiusRange": [0, 50],
                        "heightRange": [0, 500],
                        "elevationScale": 5,
                        "stroked": true,
                        "filled": true,
                        "enable3d": false,
                        "wireframe": false
                    },
                    "hidden": false,
                    "textLabel": [{
                        "field": null,
                        "color": [255, 255, 255],
                        "size": 18,
                        "offset": [0, 0],
                        "anchor": "start",
                        "alignment": "center"
                    }]
                },
                "visualChannels": {
                    "colorField": {
                        "name": "name",
                        "type": "string"
                    },
                    "colorScale": "ordinal",
                    "sizeField": null,
                    "sizeScale": "linear",
                    "strokeColorField": null,
                    "strokeColorScale": "quantile",
                    "heightField": null,
                    "heightScale": "linear",
                    "radiusField": null,
                    "radiusScale": "linear"
                }
            }],
            "interactionConfig": {
                "tooltip": {
                    "fieldsToShow": {
                        "ngo-x-offices": [{
                            "name": "name",
                            "format": null
                        }, {
                            "name": "level",
                            "format": null
                        }],
                        "ngo-x-regions": [{
                            "name": "name",
                            "format": null
                        }]
                    },
                    "compareMode": false,
                    "compareType": "absolute",
                    "enabled": true
                },
                "brush": {
                    "size": 0.5,
                    "enabled": false
                },
                "geocoder": {
                    "enabled": false
                },
                "coordinate": {
                    "enabled": false
                }
            },
            "layerBlending": "additive",
            "splitMaps": [],
            "animationConfig": {
                "currentTime": null,
                "speed": 1
            }
        },
        "mapState": {
            "bearing": 0,
            "dragRotate": false,
            "latitude": 1.142714972,
            "longitude": 34.41393654560247,
            "pitch": 0,
            "zoom": 5.5,
            "isSplit": false
        },
        "mapStyle": {
            "styleType": "dark",
            "topLayerGroups": {},
            "visibleLayerGroups": {
                "label": true,
                "road": true,
                "border": true,
                "building": true,
                "water": true,
                "land": true,
                "3d building": true
            },
            "threeDBuildingColor": [190, 48, 9],
            "mapStyles": {}
        }
    }
}

export default config;