import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Episode } from '../../interfaces/episode-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-episode-item-component',
  host: { class: 'col-3 mb-4' },
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent{
  episode = input<Episode>();
}
