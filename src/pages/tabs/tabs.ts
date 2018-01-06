import { Component } from '@angular/core';
import {CalcolaPage} from "../calcola/calcola";
import {StoricoPage} from "../storico/storico";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalcolaPage;
  tab2Root = StoricoPage;

  constructor() {

  }
}
