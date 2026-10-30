import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character-list-response';
import { CharacterItemComponent } from '../character-item-component/character-item-component';
import { CharacterModal } from '../character-modal/character-modal';

@Component({
  imports: [CharacterItemComponent, NgbPagination],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit {
  private characterService = inject(CharacterService);
  private modalService = inject(NgbModal);

  characterList = signal<Character[]>([]);
  page = signal(1);
  totalItems = signal(0);
  search = signal('');

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getAllCharacters(this.page(), this.search()).subscribe({
      next: (resp) => {
        this.characterList.set(resp.results);
        this.totalItems.set(resp.info.count);
      },
      // La API devuelve 404 cuando no hay resultados para el filtro
      error: () => {
        this.characterList.set([]);
        this.totalItems.set(0);
      },
    });
  }

  onPageChange(page: number): void {
    this.page.set(page);
    this.loadCharacters();
  }

  onSearch(name: string): void {
    this.search.set(name.trim());
    this.page.set(1);
    this.loadCharacters();
  }

  // Recibe el ID emitido por el output del hijo, pide el detalle a la API
  // y abre el modal pasándole el personaje
  openCharacterModal(id: number): void {
    this.characterService.getOneCharacter(String(id)).subscribe((resp) => {
      const modalRef = this.modalService.open(CharacterModal);
      modalRef.componentInstance.characterDetail = resp;
    });
  }
}
