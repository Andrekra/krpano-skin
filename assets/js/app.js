'use strict'
const App = {};


App.Logger = class Logger{
  log(message){
    console.log(message);
  }
}

App.Viewer = class Viewer{
  constructor(xml){
     this.logger = new App.Logger()
     return embedpano({
      id: "mainPanorama", //id of krpano, needed to make calls
      swf: "vendor/player.swf", // path to swf version (js is already included in manifest)
      xml: xml, // panorama to load
      target: "pano", // target html element where to load krpano
      html5: "prefer", // prefer html5 over flash if both are present
      wmode: "opaque", // allow html overlays when using flash
      consolelog: true, // messages get outputted to console
      onready: this.onReady(), // this method get's called when krpano is ready to receive calls
      vars: {} // extra vars to send to krpano, only on load
    });
  }
  onReady(viewer){
    this.viewer = viewer;
    this.logger.log('ready');
  }
}

function ready(){
  new App.Viewer('tour.xml');
}

function enterfullscreen(){
  var d = document.getElementById('tour_wrapper')
  d.style.width = "100%"
  d.style.height = "100%"
  d.webkitRequestFullScreen()
}
function exitfullscreen(){
  var d = document.getElementById('tour_wrapper')
  d.style.width = "100%"
  d.style.height = "100%"
  d.webkitExitFullScreen()
}
