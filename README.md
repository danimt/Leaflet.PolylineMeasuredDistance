Leaflet.PolylineMeasuredDistance
================================

Calculates distance from a Leaflet Polyline layer.

Usage
=====

```JavaScript

// Create a Polyline or use an existing one (for example when working with Leaflet.Draw)
var polyline = L.polyline(latlngs).addTo(map);

// Returns the distance in metric units
polyline.measuredDistance();

// Returns the distance in imperial units
polyline.measuredDistance({
  metric: false
});

```

Tasks
=====

- ~~Add option for metric or imperial units~~
- ~~Add string formatting (eg: `1.000 km`, `1 km`, `500 m`)~~


Credits
=======

Diego Soto
https://groups.google.com/forum/#!topic/leaflet-js/I1vQZh4QWjc
