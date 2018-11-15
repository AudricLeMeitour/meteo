import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/umd';
import { Observable } from 'rxjs/Observable';
import { IMeteo } from '../../../interface/IMeteo';



/*
  Generated class for the MeteoApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoApiProvider {
    private baseUrl: string = "../../assets/api/meteo.json";
   
    meteo: IMeteo[];
   
    constructor(
      private readonly http: HttpClient,
      private readonly platform: Platform
    ) {
      console.log("Hello MovieApiProvider Provider");
      if (this.platform.is("cordova") && this.platform.is("android")) {
        this.baseUrl = "/android_asset/www/assets/api/meteo.json";
      }
    }
    getMeteo(): Observable<any> {
      return this.http.get(this.baseUrl);
    }
  }