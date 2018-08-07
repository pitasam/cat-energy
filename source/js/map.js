;(function() {
  window.onload = function() {
    ymaps.ready(init);
    var myMap;

    function init() {
      myMap = new ymaps.Map("map", {
        center: [59.93863106417265, 30.3230545],
        zoom: 16,
        controls: []
      });

      var coords = [[59.93863106417265, 30.3230545]],
        myCollection = new ymaps.GeoObjectCollection(
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "../img/map-pin.png",
            iconImageSize: [57, 50],
            iconImageOffset: [-26, -52]
          }
        );

      for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
      }

      myMap.geoObjects.add(myCollection);
    }
  };
})();
