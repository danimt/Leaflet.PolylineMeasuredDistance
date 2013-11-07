Leaflet.PolylineMeasuredDistance
================================

Calculates distance in Leaflet Polyline. Especially useful since Leaflet.Draw doesn't provide a public method for this.

Usage
=====

```JavaScript

// Create a Polyline or use an existing one (for example when working with Leaflet.Draw)
var polyline = L.polyline(latlngs).addTo(map);

polyline.measuredDistance(); // returns Polyline distance

```

TODO
====

- Add option for metric or imperial units
- Add string formatting (eg: `1.000.000 km`, `1.000 km`, `1 km`, `500 m`) 


Credits
=======

Diego Soto
https://groups.google.com/forum/#!topic/leaflet-js/I1vQZh4QWjc
