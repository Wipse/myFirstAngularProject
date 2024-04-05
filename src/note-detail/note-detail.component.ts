import { Component, inject } from '@angular/core';
import { NOTES } from '../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  delNote() { 
    if(this.note) 
    { let iDel = NOTES.indexOf(this.note, 0); 
    NOTES.splice(iDel, 1); 
  }
 }
}
