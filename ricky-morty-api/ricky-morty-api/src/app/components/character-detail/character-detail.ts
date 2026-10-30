import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character-service';
import { CharacterDetailResponse } from '../../interfaces/character-detail-response';

@Component({
  imports: [RouterLink],
  selector: 'app-character-detail',
  styleUrl: './character-detail.css',
  templateUrl: './character-detail.html',
})
export class CharacterDetail {
  private characterService = inject(CharacterService);
  private route = inject(ActivatedRoute);

  character = signal<CharacterDetailResponse | undefined>(undefined);

  // Los episodios vienen como URLs; nos quedamos con el ID final para enlazar
  episodeIds = computed(
    () => this.character()?.episode.map((url) => url.split('/').pop() ?? '') ?? [],
  );

  constructor() {
    this.route.params.subscribe((params) => {
      this.characterService.getOneCharacter(params['id']).subscribe((resp) => {
        this.character.set(resp);
      });
    });
  }
}
