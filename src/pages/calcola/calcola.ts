import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PersonaServiceProvider} from "../../providers/persona-service/persona-service";
import {persona} from "../../model/persona";
import {Storage} from "@ionic/storage";


@IonicPage()
@Component({
  selector: 'page-calcola',
  templateUrl: 'calcola.html',
})
export class CalcolaPage {
  nome = "";
  cognome = "";
  dataIniziale: any; //variabile per gestire l'errore
  dataFinale: string;
  data: string[] = new Array();
  codiceFiscale: string;
  listCF:any=new Array();
  sesso = "";
  comune = "";
  dataNascita = "";
  pers: persona = new persona;

  constructor(public navCtrl: NavController, public navParams: NavParams, private personaService: PersonaServiceProvider,
              private alertCtrl: AlertController,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcolaPage');
  }

  calcoloCF() {
    // this.persona.Cognome=this.cognome;
    // this.persona.Nome=this.nome;
    // this.persona.Sesso=this.sesso;
    // this.persona.ComuneNascita=this.comune;
    // this.persona.DataNascita=this.dataNascita;
    this.dataIniziale = this.pers.DataNascita;

    this.checkData();

    this.personaService.getCF(this.pers).subscribe(data => {
      console.log(this.pers);
      console.log(data);

      this.codiceFiscale = data;
      this.codiceFiscale = this.codiceFiscale.substring(this.codiceFiscale.lastIndexOf('"'), this.codiceFiscale.lastIndexOf('/'));
      this.codiceFiscale = this.codiceFiscale.substring(this.codiceFiscale.lastIndexOf('>') + 1, this.codiceFiscale.lastIndexOf('<'));
      console.log("il codice fiscale è: " + this.codiceFiscale);

      this.presentAlert();


      this.storage.set("codiceFiscale",this.codiceFiscale);
     // localStorage.setItem("codiceFiscale",this.listCF.push(this.codiceFiscale));

      this.pers.DataNascita = this.dataIniziale; // gestione dell'errore

    }, err => {
      console.error(err)
    })

    this.storage.get("codiceFiscale").then((val)=>{
      console.log("storage: ",val);

    });
  }



  checkData() {

    this.data = this.pers.DataNascita.split('-');
    console.log("la data splittata è: " + this.data);
    this.dataFinale = this.data[2] + '/' + this.data[1] + '/' + this.data[0];
    console.log("la data sistemata è: " + this.dataFinale);
    this.pers.DataNascita = this.dataFinale;
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Codice Fiscale:',
      subTitle: this.codiceFiscale,
      buttons: ['Chiudi']
    });
    alert.present();
  }

}
