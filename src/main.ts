import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes} from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent }
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));
