const { Map } = google.maps;

export interface Location {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string
}
export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(view : HTMLElement) {
        this.googleMap = new Map(view, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0 
            }
        });
    }
    addMarker( obj : Location ) : void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            title: obj.name,
            position: {
                lat: obj.location.lat,
                lng: obj.location.lng
            }
        })
        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: obj.markerContent()
            });
            infoWindow.open(this.googleMap, marker)
        })
        
    }
}