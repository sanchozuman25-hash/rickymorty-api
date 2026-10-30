import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterDetailResponse } from '../../interfaces/character-detail-response';

@Component({
  imports: [],
  selector: 'app-character-modal',
  styleUrl: './character-modal.css',
  templateUrl: './character-modal.html',
})
export class CharacterModal {
  activeModal = inject(NgbActiveModal);
  @Input() characterDetail: CharacterDetailResponse | undefined;
}
