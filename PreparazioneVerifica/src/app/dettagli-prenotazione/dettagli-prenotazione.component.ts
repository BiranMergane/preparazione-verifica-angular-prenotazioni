import { Component, Input} from '@angular/core';
import { Prenotazioni } from '../models/prenotazioni.model';

@Component({
  selector: 'app-dettagli-prenotazione',
  standalone: true,
  imports: [],
  templateUrl: './dettagli-prenotazione.component.html',
  styleUrl: './dettagli-prenotazione.component.css'
})
export class DettagliPrenotazioneComponent {
  @Input() dettagli: Prenotazioni = new Prenotazioni("", "", "", "", "", "", "")

}
