import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOTES } from '../notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {
  router = inject(Router);

  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
  });

// Definieer een methode genaamd addNote() binnen de AddNoteComponent klasse
addNote() {
  // Haal de waarden op van de title en text velden van het formulier addNoteForm
  let title = this.addNoteForm.value.title ?? ''; // Als de title leeg is, wijs een lege string toe
  let text = this.addNoteForm.value.text ?? '';   // Als de text leeg is, wijs een lege string toe

  if (this.addNoteForm.valid) {
    // Maak een array met alleen de ID's van de notities in het NOTES array
    let ids = NOTES.map((a) => a.id);

    // Initialiseer een variabele maxId met de waarde 0
    let maxId = 0;

    // Controleer of er notities zijn in het NOTES array
    if (ids.length > 0) {
      // Bepaal de maximale ID van de bestaande notities
      maxId = Math.max(...ids);
    }

    // Maak een nieuw object newNote met een ID één hoger dan de maximale ID van de bestaande notities en met de title en text zoals ingevuld door de gebruiker
    let newNote = {
      id: maxId + 1,
      title: title,
      text: text,
    };

    // Voeg de nieuwe notitie toe aan het begin van de NOTES array
    NOTES.unshift(newNote);

    // Reset het formulier nadat de notitie met succes is toegevoegd
    // Waardoor de velden worden leeggemaakt en eventuele foutmeldingen worden gewist
    this.addNoteForm.reset();

    this.router.navigateByUrl('/')
  }
}
}
