import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotazioni } from './models/prenotazioni.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListaPrenotazioniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'PreparazioneVerifica';
  vettPrenotazioni: Prenotazioni [] = []; 

  loading!: boolean
  o_vettPrenotazioni!: Observable<Prenotazioni[]>
  http!: HttpClient
  o!: Observable <Object>
  dati_post: Object = JSON.stringify({})
  data!: Object

  constructor(http: HttpClient){this.http = http}


salva(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, email: HTMLInputElement, telefono: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement){
  this.loading = true
    this.dati_post = JSON.stringify(
      {
        nome: nome.value,
        cognome: cognome.value,
        indirizzo: indirizzo.value,
        telefono: telefono.value,
        email: email.value,
        data: data.value,
        ora: ora.value
      }
    )
    this.o = this.http.post("https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni", this.dati_post)
    this.o.subscribe(this.postData)
    this.vettPrenotazioni.push(new Prenotazioni(nome.value, cognome.value, indirizzo.value, telefono.value, email.value, data.value, ora.value))
    console.log(this.vettPrenotazioni)
    nome.value = ""
    cognome.value = ""
    indirizzo.value = ""
    telefono.value = ""
    email.value = ""
    data.value = ""
    ora.value = ""
}

postData = (d: object) =>
  {
    this.data = d
    console.log(this.data)
    this.loading = false
  }

makeGet()
{
  this.loading = true
  this.o_vettPrenotazioni = this.http.get<Prenotazioni[]>("https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni")
  this.o_vettPrenotazioni.subscribe(this.getData)
}
getData = (dati: Prenotazioni[]) =>
{
  this.vettPrenotazioni = dati
  this.loading = false
  console.log(this.vettPrenotazioni)
}

ngOnInit(): void {
  this.makeGet()
}
}
