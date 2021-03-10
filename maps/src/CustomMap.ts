import L from "leaflet";

export interface Locatable {
  location: { lat: number; lon: number };
  locationInfo(): string;
}

export default class CustomMap {
  private map: L.Map;

  constructor(container: HTMLElement) {
    this.map = L.map(container).setView([51.505, -0.09], 3);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=<YOUR-MAPBOX-API-KEY>",
      {
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(this.map);
  }

  addMarker(markerItem: Locatable): L.Marker {
    const marker = L.marker([markerItem.location.lat, markerItem.location.lon]);
    if (markerItem.locationInfo()) {
      marker.bindPopup(markerItem.locationInfo()).openPopup();
    }
    marker.addTo(this.map);
    return marker;
  }
}
