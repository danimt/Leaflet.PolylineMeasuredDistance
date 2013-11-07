/*
 * Extends L.Polyline to retrieve measured distance.
 *
 * https://github.com/danimt/Leaflet.PolylineMeasuredDistance
 */

L.Polyline.prototype.measuredDistance = function () {
  var meters = 0;
  var coords = null;
  var coordsArray = this._latlngs;

  for (i = 0; i < coordsArray.length - 1; i++) {
    coords = coordsArray[i];
    meters += coords.distanceTo(coordsArray[i + 1]);
  }

  return meters.toFixed();
};
