import { Component, Input } from '@angular/core';
import { Prenotazioni } from '../models/prenotazioni.model';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() prenotazione!: Prenotazioni
}
