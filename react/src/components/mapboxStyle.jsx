const mapboxStyle = {
    "version": 8,
    "name": "Pi Node Server",
    "metadata": {
        "mapbox:autocomposite": true,
        "mapbox:sdk-support": {
            "js": "0.54.0",
            "android": "7.4.0",
            "ios": "4.11.0"
        },
        "mapbox:trackposition": false
    },
    "center": [8.78511, 46.629445],
    "zoom": 8,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "mapbox://mapbox.terrain-rgb": {
            "url": "mapbox://mapbox.terrain-rgb",
            "type": "raster-dem",
            "tileSize": 256
        }
    },
    "sprite": "mapbox://sprites/listingslab/ck3xhp0z84a2m1co2qgche4fv/ck2u8j60r58fu0sgyxrigm3cu",
    "glyphs": "mapbox://fonts/listingslab/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    "hsl(38, 43%, 89%)",
                    7,
                    "hsl(38, 48%, 86%)"
                ]
            }
        },
        {
            "id": "national_park",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse_overlay",
            "filter": ["==", "class", "national_park"],
            "layout": {},
            "paint": {
                "fill-color": "hsl(78, 51%, 73%)",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.5
                ]
            }
        },
        {
            "id": "landuse",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse",
            "filter": ["in", "class", "hospital", "park", "pitch", "school"],
            "layout": {},
            "paint": {
                "fill-color": [
                    "match",
                    ["get", "class"],
                    "park",
                    "hsl(78, 51%, 73%)",
                    "pitch",
                    "hsl(78, 51%, 73%)",
                    "hospital",
                    "hsl(0, 56%, 89%)",
                    "school",
                    "hsl(25, 45%, 85%)",
                    "hsla(0, 0%, 0%, 0)"
                ],
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    1
                ]
            }
        },
        {
            "id": "waterway",
            "type": "line",
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "class", "canal", "river"]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-color": "hsl(205, 76%, 70%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.3],
                    ["zoom"],
                    8.5,
                    0.1,
                    20,
                    8
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "water",
            "type": "fill",
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": {
                "fill-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    "hsl(205, 76%, 67%)",
                    7,
                    "hsl(205, 76%, 70%)"
                ]
            }
        },
        {
            "id": "mapbox-terrain-rgb",
            "type": "hillshade",
            "source": "mapbox://mapbox.terrain-rgb",
            "layout": { "visibility": "visible" },
            "paint": { "hillshade-shadow-color": "hsl(39, 21%, 33%)" }
        },
        {
            "id": "aeroway-polygon",
            "type": "fill",
            "source": "composite",
            "source-layer": "aeroway",
            "filter": [
                "all",
                ["==", "$type", "Polygon"],
                ["in", "type", "helipad", "runway", "taxiway"]
            ],
            "layout": {},
            "paint": { "fill-color": "hsl(0, 0%, 77%)" }
        },
        {
            "id": "aeroway-line",
            "type": "line",
            "source": "composite",
            "source-layer": "aeroway",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["in", "type", "runway", "taxiway"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    0.5,
                    18,
                    20
                ],
                "line-color": "hsl(0, 0%, 77%)"
            }
        },
        {
            "id": "pedestrian-path",
            "type": "line",
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "platform"],
                    ["in", "class", "path", "pedestrian"]
                ]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        "pedestrian",
                        1,
                        "path",
                        0.75,
                        0.75
                    ],
                    20,
                    ["match", ["get", "class"], "pedestrian", 8, "path", 5, 5]
                ],
                "line-color": [
                    "match",
                    ["get", "type"],
                    "sidewalk",
                    "hsl(38, 35%, 80%)",
                    "crossing",
                    "hsl(38, 35%, 80%)",
                    "hsl(38, 28%, 70%)"
                ]
            }
        },
        {
            "id": "tunnel",
            "type": "line",
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "service:parking_aisle"],
                    ["==", "structure", "tunnel"],
                    [
                        "in",
                        "class",
                        "link",
                        "motorway",
                        "motorway_link",
                        "primary",
                        "secondary",
                        "service",
                        "street",
                        "street_limited",
                        "tertiary",
                        "track",
                        "trunk"
                    ]
                ]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        0.5,
                        "trunk",
                        0.5,
                        "primary",
                        0.5,
                        "secondary",
                        0.01,
                        "tertiary",
                        0.01,
                        "street",
                        0,
                        "street_limited",
                        0,
                        "motorway_link",
                        0,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    12,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        3,
                        "trunk",
                        3,
                        "primary",
                        3,
                        "secondary",
                        2,
                        "tertiary",
                        2,
                        "street",
                        0.5,
                        "street_limited",
                        0.5,
                        "motorway_link",
                        0.5,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        30,
                        "trunk",
                        30,
                        "primary",
                        30,
                        "secondary",
                        24,
                        "tertiary",
                        24,
                        "street",
                        12,
                        "street_limited",
                        12,
                        "motorway_link",
                        12,
                        "service",
                        10,
                        "track",
                        10,
                        "link",
                        10,
                        10
                    ]
                ],
                "line-color": [
                    "match",
                    ["get", "class"],
                    "street",
                    "hsl(38, 100%, 98%)",
                    "street_limited",
                    "hsl(38, 100%, 98%)",
                    "service",
                    "hsl(38, 100%, 98%)",
                    "track",
                    "hsl(38, 100%, 98%)",
                    "link",
                    "hsl(38, 100%, 98%)",
                    "hsl(0, 0%, 100%)"
                ],
                "line-dasharray": [0.2, 0.2]
            }
        },
        {
            "id": "road",
            "type": "line",
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "service:parking_aisle"],
                    ["!in", "structure", "bridge", "tunnel"],
                    [
                        "in",
                        "class",
                        "link",
                        "motorway",
                        "motorway_link",
                        "primary",
                        "secondary",
                        "service",
                        "street",
                        "street_limited",
                        "tertiary",
                        "track",
                        "trunk"
                    ]
                ]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        0.5,
                        "trunk",
                        0.5,
                        "primary",
                        0.5,
                        "secondary",
                        0.01,
                        "tertiary",
                        0.01,
                        "street",
                        0,
                        "street_limited",
                        0,
                        "motorway_link",
                        0,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    12,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        3,
                        "trunk",
                        3,
                        "primary",
                        3,
                        "secondary",
                        2,
                        "tertiary",
                        2,
                        "street",
                        0.5,
                        "street_limited",
                        0.5,
                        "motorway_link",
                        0.5,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        30,
                        "trunk",
                        30,
                        "primary",
                        30,
                        "secondary",
                        24,
                        "tertiary",
                        24,
                        "street",
                        12,
                        "street_limited",
                        12,
                        "motorway_link",
                        12,
                        "service",
                        10,
                        "track",
                        10,
                        "link",
                        10,
                        10
                    ]
                ],
                "line-color": [
                    "match",
                    ["get", "class"],
                    "street",
                    "hsl(38, 100%, 98%)",
                    "street_limited",
                    "hsl(38, 100%, 98%)",
                    "service",
                    "hsl(38, 100%, 98%)",
                    "track",
                    "hsl(38, 100%, 98%)",
                    "link",
                    "hsl(38, 100%, 98%)",
                    "hsl(0, 0%, 100%)"
                ]
            }
        },
        {
            "id": "bridge-case",
            "type": "line",
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "service:parking_aisle"],
                    ["==", "structure", "bridge"],
                    [
                        "in",
                        "class",
                        "link",
                        "motorway",
                        "motorway_link",
                        "primary",
                        "secondary",
                        "service",
                        "street",
                        "street_limited",
                        "tertiary",
                        "track",
                        "trunk"
                    ]
                ]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    16,
                    2
                ],
                "line-color": "hsl(38, 48%, 86%)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        0.5,
                        "trunk",
                        0.5,
                        "primary",
                        0.5,
                        "secondary",
                        0.01,
                        "tertiary",
                        0.01,
                        "street",
                        0,
                        "street_limited",
                        0,
                        "motorway_link",
                        0,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    12,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        3,
                        "trunk",
                        3,
                        "primary",
                        3,
                        "secondary",
                        2,
                        "tertiary",
                        2,
                        "street",
                        0.5,
                        "street_limited",
                        0.5,
                        "motorway_link",
                        0.5,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        30,
                        "trunk",
                        30,
                        "primary",
                        30,
                        "secondary",
                        24,
                        "tertiary",
                        24,
                        "street",
                        12,
                        "street_limited",
                        12,
                        "motorway_link",
                        12,
                        "service",
                        10,
                        "track",
                        10,
                        "link",
                        10,
                        10
                    ]
                ]
            }
        },
        {
            "id": "bridge",
            "type": "line",
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "service:parking_aisle"],
                    ["==", "structure", "bridge"],
                    [
                        "in",
                        "class",
                        "link",
                        "motorway",
                        "motorway_link",
                        "primary",
                        "secondary",
                        "service",
                        "street",
                        "street_limited",
                        "tertiary",
                        "track",
                        "trunk"
                    ]
                ]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        0.5,
                        "trunk",
                        0.5,
                        "primary",
                        0.5,
                        "secondary",
                        0.01,
                        "tertiary",
                        0.01,
                        "street",
                        0,
                        "street_limited",
                        0,
                        "motorway_link",
                        0,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    12,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        3,
                        "trunk",
                        3,
                        "primary",
                        3,
                        "secondary",
                        2,
                        "tertiary",
                        2,
                        "street",
                        0.5,
                        "street_limited",
                        0.5,
                        "motorway_link",
                        0.5,
                        "service",
                        0,
                        "track",
                        0,
                        "link",
                        0,
                        0
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        "motorway",
                        30,
                        "trunk",
                        30,
                        "primary",
                        30,
                        "secondary",
                        24,
                        "tertiary",
                        24,
                        "street",
                        12,
                        "street_limited",
                        12,
                        "motorway_link",
                        12,
                        "service",
                        10,
                        "track",
                        10,
                        "link",
                        10,
                        10
                    ]
                ],
                "line-color": [
                    "match",
                    ["get", "class"],
                    "street",
                    "hsl(38, 100%, 98%)",
                    "street_limited",
                    "hsl(38, 100%, 98%)",
                    "service",
                    "hsl(38, 100%, 98%)",
                    "track",
                    "hsl(38, 100%, 98%)",
                    "link",
                    "hsl(38, 100%, 98%)",
                    "hsl(0, 0%, 100%)"
                ]
            }
        }
    ],
    "created": "2019-12-08T20:58:54.392Z",
    "id": "ck3xhp0z84a2m1co2qgche4fv",
    "modified": "2019-12-08T20:59:11.416Z",
    "owner": "listingslab",
    "visibility": "public",
    "draft": false
}

export { mapboxStyle };