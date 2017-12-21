import { Component, ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('map') mapElement: ElementRef;

    Items=[{ok:'1'},{ok:2}];

  map: any;

  constructor(public navCtrl: NavController) {


  }

    ionViewDidLoad(){
    this.loadMap();
  }

   loadMap(){
 
 let mapOptions = {
        center:{lat: -34.397, lng: 150.644},
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
    
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      setTimeout(()=>{
        console.log('call');
        this.addMarker();
      },1000);
    
   }

   addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
  let content = "<h4>Information!</h4>";         
 
  this.addInfoWindow(marker, content);
 
}

addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}
 
   

}
