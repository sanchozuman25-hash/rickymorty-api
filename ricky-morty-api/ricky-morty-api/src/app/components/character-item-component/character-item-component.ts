import { Component, computed, input, output } from '@angular/core';
import { Character } from '../../interfaces/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  host: { class: 'col-6 col-md-3 mb-4' },
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {
  // Input: personaje que recibe del padre para dibujarlo
  character = input<Character>();

  // Output: evento custom que emite el ID del personaje al padre cuando se hace clic
  characterClicked = output<number>();

  statusClass = computed(() => {
    switch (this.character()?.status) {
      case 'Alive':
        return 'text-bg-success';
      case 'Dead':
        return 'text-bg-danger';
      default:
        return 'text-bg-secondary';
    }
  });

  // Gestiona el clic en este componente hijo y emite el ID por el output
  emitCharacterClicked() {
    const id = this.character()?.id;
    if (id !== undefined) {
      this.characterClicked.emit(id);
    }
  }
}
