import { Component } from '@angular/core';
import { MapService } from './map.service';
import { Location } from './location';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your-location';
  location: Location;
  lat: string = "";
  lng: string = "";
  locArray = [];
  display: Boolean = false;


  ip: string = '';
  city: string = '';
  region:  string = '';
  region_code: string = '';
  country: string = '';
  country_name: string = '';
  continent_code: string = '';
  in_eu: boolean = false;
  postal: string = '';
  latitude: string = '';
  longitude: string = '';
  timezone: string = '';
  utc_offset:string = '';
  country_calling_code: string = '';
  currency: string = '';
  languages: string = '';
  asn: string = '';
  org: string = ''; 
  
  
 

  constructor (private map: MapService) { }

  ngOnInit(){
    this.map.getLocation().subscribe( (data: Location) => {
      this.location = data;
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.setDataToProps(data);
      this.locArray = Object.entries(this.location);
      this.cleanKeyString(this.locArray);
      console.log(this.locArray);

    });
  }

  setDataToProps(obj){
    this.asn = obj.asn;
    this.city = obj.city;
    this.continent_code = obj.continent_code;
    this.country = obj.country;
    this.country_calling_code = obj.country_calling_code;
    this.country_name = obj.country_name;
    this.currency = obj.currency;
    this.in_eu = obj.in_eu;
    this.ip = obj.ip;
    this.languages = obj.languages;
    this.latitude = obj.latitude;
    this.longitude = obj.longitude;
    this.org = obj.org;
    this.postal = obj.postal;
    this.region = obj.region;
    this.region_code = obj.region_code;
    this.timezone = obj.timezone;
  }

  displayInfo(){
    if(this.display == false){
      this.display = true;
      // return true;
    }
    else{
      this.display = false;
      // return false;
    }
  }

  cleanKeyString(obj){
    obj.forEach(function(){
      
    })
  }

}
