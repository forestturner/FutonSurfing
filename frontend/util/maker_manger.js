
export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    //permanently bind instance methods
    this._createMarkerFromFuton = this._createMarkerFromFuton.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(futons){
    this.futons = futons;
    this._futonsToAdd().forEach(this._createMarkerFromFuton);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _futonsToAdd(){
    const currentFutonIds = this.markers.map( marker => marker.futonId );
    const newFutons = this.futons;
    const newFutonIds = Object.keys(newFutons);

    return newFutonIds.reduce( (collection, futonId) => {
      if (!currentFutonIds.includes(futonId)) {
        return ( collection.concat( [newFutons[futonId]] ));
      }
    }, [] );
  }

  _markersToRemove(){
    return this.markers.filter( marker => {
      return !this.futons.hasOwnProperty(marker.futonId);
    });
  }

  _createMarkerFromFuton(futon) {
    const pos = new google.maps.LatLng(futon.lat, futon.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      futonId: futon.id
    });
    marker.addListener('click', () => this.handleClick(futon));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
