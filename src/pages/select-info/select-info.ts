import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getNavFromNavGroup } from 'ionic-angular/umd/navigation/url-serializer';
import { MeteoApiProvider } from '../../providers/meteo-api/meteo-api';

/**
 * Generated class for the SelectInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-info',
  templateUrl: 'select-info.html',
})
export class SelectInfoPage {
  Image = "";
  Date = "";
  Min = "";
  Max = "";

  formulaire = {jour: ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, private meteoApiProvider: MeteoApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectInfoPage');
  }
  logFormulaire(){
    this.getJour(this.formulaire.jour);
  }

  getJour(jour){
    this.meteoApiProvider.getMeteo().subscribe(data =>{
      for(let i = 0; i< 5; i++){
        if(data["fcst_data_"+i]["day_long"] == jour){
          this.Image = data["fcst_day_"+i]["icon_big"];
          this.Date = data["fcst_day_"+i]["date"];
          this.Min = data["fcst_day_"+i]["tmin"];
          this.Max = data["fcst_day_"+i]["tmax"];
        }
      }
    })
    
  }







  
}
