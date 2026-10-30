import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeService } from '../../services/episode-service';
import { Episode } from '../../interfaces/episode-list-response';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';

@Component({
  imports: [EpisodeItemComponent, NgbPagination],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent implements OnInit {
  episodeService = inject(EpisodeService);
  episodeList = signal<Episode[]>([]);
  page = signal(1);
  totalItems = signal(0);

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.episodeService.getAllEpisodes(this.page()).subscribe((resp) => {
      this.episodeList.set(resp.results);
      this.totalItems.set(resp.info.count);
    });
  }

  onPageChange(page: number): void {
    this.page.set(page);
    this.loadEpisodes();
  }
}
