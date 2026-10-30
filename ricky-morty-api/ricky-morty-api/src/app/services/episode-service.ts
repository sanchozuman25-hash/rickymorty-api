import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeListResponse } from '../interfaces/episode-list-response';
import { EpisodeDetailResponse } from '../interfaces/episode-detail-response';

@Service()
export class EpisodeService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://rickandmortyapi.com/api/episode';

  getAllEpisodes(page = 1): Observable<EpisodeListResponse> {
    const params = new HttpParams().set('page', page);
    return this.http.get<EpisodeListResponse>(this.baseUrl, { params });
  }

  getOneEpisode(id: string): Observable<EpisodeDetailResponse> {
    return this.http.get<EpisodeDetailResponse>(`${this.baseUrl}/${id}`);
  }
}
