import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EpisodeService } from '../../services/episode-service';
import { EpisodeDetailResponse } from '../../interfaces/episode-detail-response';

@Component({
  imports: [RouterLink],
  selector: 'app-episode-detail',
  styleUrl: './episode-detail.css',
  templateUrl: './episode-detail.html',
})
export class EpisodeDetail {
  private episodeService = inject(EpisodeService);
  private route = inject(ActivatedRoute);
  episodeId = '';
  episode = signal<EpisodeDetailResponse | undefined>(undefined);

  characterIds = computed(
    () => this.episode()?.characters.map((url) => url.split('/').pop() ?? '') ?? [],
  );

  constructor() {
    this.route.params.subscribe((params) => {
      this.episodeId = params['id'];
      this.episodeService.getOneEpisode(this.episodeId).subscribe((resp) => {
        this.episode.set(resp);
      });
    });
  }
}
