function Menu(data) {
  this._data = data;
  this.title = data.title;
  this.options = data.options;
  this.viewName = "menu";
}

Menu.prototype.selectOption = function(choice) {
  app.navigation.navigateTo(new Menu(choice));
};

function App() {
  this._currentPOI = [];
  var mainMenu = new Menu(menu);
  this.navigation = new ko.navigation.NavigationModel({ defaultViewModel: mainMenu });

  this.initializeMap();
  this.displayPOI(data);
}


App.prototype.initializeMap = function() {
  var reykjavik = new google.maps.LatLng(64.116748, -21.87137),
      self = this,
      mapOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        center: reykjavik
      };
  
  this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.person = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: self.map,
        title: "Þú ert staddur hér"
      });
      self.map.setCenter(this.person.getPosition());
    });
  }
};

App.prototype._getMarker = function(poi) {
  if (poi.marker)
    return poi.marker;
  var loc = new Isn93(poi.x, poi.y),
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(loc.lat, loc.lon),
        title: poi.name
      });
  return poi.marker = marker;
};

App.prototype.displayPOI = function(points) {
  var i, marker, length = this._currentPOI;
  for (i = 0; i < length; i++) {
    this._currentPOI[i].marker.setMap(null);
  }
  length = points.length;
  for (i = 0; i < length; i++) {
    marker = this._getMarker(points[i]);
    marker.setMap(this.map);
  }
  this._currentPOI = points;
};