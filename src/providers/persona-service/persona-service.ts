import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";


//
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/x-www-form-urlencoded',
//   }),responseType:'text'
// };

@Injectable()
export class PersonaServiceProvider {


  constructor(public http: HttpClient) {
    console.log('Hello PersonaServiceProvider Provider');
  }

  getCF(persona): Observable<any> {
    let stringa: String = 'Nome=' + persona.Nome + '&Cognome=' + persona.Cognome + '&ComuneNascita=' +
      persona.ComuneNascita + '&DataNascita=' + persona.DataNascita + '&Sesso=' + persona.Sesso;
    console.log(stringa);
    return this.http.post('http://webservices.dotnethell.it/codicefiscale.asmx/CalcolaCodiceFiscale', stringa,
      {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}), responseType: 'text'})
  }

}
