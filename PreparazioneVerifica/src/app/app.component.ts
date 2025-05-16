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

  constructor(http: HttpClient){this.http = http}


salva(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, email: HTMLInputElement, telefono: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement){
  this.vettPrenotazioni.push(new Prenotazioni(nome.value, cognome.value, indirizzo.value, telefono.value, email.value, data.value, ora.value ))
  console.log(this.vettPrenotazioni)
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
