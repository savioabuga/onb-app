const config = {
    "version": "v1",
    "config": {
        "visState": {
            "filters": [],
            "layers": [{
                "id": "roa0loi",
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
                        "elevationScale": 1.9,
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
                        "name": "Name",
                        "type": "string"
                    },
                    "colorScale": "ordinal",
                    "sizeField": null,
                    "sizeScale": "linear",
                    "strokeColorField": null,
                    "strokeColorScale": "quantile",
                    "heightField": {
                        "name": "Number of Staff",
                        "type": "integer"
                    },
                    "heightScale": "linear",
                    "radiusField": null,
                    "radiusScale": "linear"
                }
            }, {
                "id": "ec4qqqm",
                "type": "point",
                "config": {
                    "dataId": "ngo-x-offices",
                    "label": "NGO X Offices",
                    "color": [231, 83, 31],
                    "columns": {
                        "lat": "Lat",
                        "lng": "Lon",
                        "altitude": null
                    },
                    "isVisible": true,
                    "visConfig": {
                        "radius": 17.5,
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
                        "radiusRange": [0, 57],
                        "filled": true
                    },
                    "hidden": false,
                    "textLabel": []
                },
                "visualChannels": {
                    "colorField": null,
                    "colorScale": "quantile",
                    "strokeColorField": null,
                    "strokeColorScale": "quantile",
                    "sizeField": {
                        "name": "Number of Staff",
                        "type": "integer"
                    },
                    "sizeScale": "sqrt"
                }
            }],
            "interactionConfig": {
                "tooltip": {
                    "fieldsToShow": {
                        "ngo-x-offices": [{
                            "name": "Name",
                            "format": null
                        }, {
                            "name": "Level",
                            "format": null
                        }, {
                            "name": "Lat",
                            "format": null
                        }, {
                            "name": "Lon",
                            "format": null
                        }, {
                            "name": "Number of Staff",
                            "format": null
                        }],
                        "ngo-x-regions": [{
                            "name": "Name",
                            "format": null
                        }, {
                            "name": "Number of Staff",
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
            "latitude": -0.11898088754316526,
            "longitude": 36.20120774513305,
            "pitch": 0,
            "zoom": 5.725054616739361,
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


