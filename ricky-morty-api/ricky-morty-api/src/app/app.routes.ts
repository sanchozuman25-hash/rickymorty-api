import { Routes } from '@angular/router';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component';
import { EpisodeDetail } from './components/episode-detail/episode-detail';
import { CharacterListComponent } from './components/character-list-component/character-list-component';
import { CharacterDetail } from './components/character-detail/character-detail';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'episode-list', component: EpisodeListComponent },
  { path: 'episode-detail/:id', component: EpisodeDetail },
  { path: 'character-list', component: CharacterListComponent },
  { path: 'character-detail/:id', component: CharacterDetail },
  { path: '', redirectTo: '/episode-list', pathMatch: 'full' },
  { path: '**', component: NotFound },
];
