import { Component, Input } from '@angular/core';
import { Prenotazioni } from '../models/prenotazioni.model';
import { DettagliPrenotazioneComponent } from '../dettagli-prenotazione/dettagli-prenotazione.component';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [DettagliPrenotazioneComponent],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() prenotazione!: Prenotazioni
  dettagli!: boolean
  mostra_dett() :boolean
  {
    this.dettagli = !this.dettagli
    console.log("Mergane" )
    return false
  }
}
