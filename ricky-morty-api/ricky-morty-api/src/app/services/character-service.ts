import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListResponse } from '../interfaces/character-list-response';
import { CharacterDetailResponse } from '../interfaces/character-detail-response';

@Service()
export class CharacterService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://rickandmortyapi.com/api/character';

  getAllCharacters(page = 1, name = ''): Observable<CharacterListResponse> {
    let params = new HttpParams().set('page', page);
    if (name) {
      params = params.set('name', name);
    }
    return this.http.get<CharacterListResponse>(this.baseUrl, { params });
  }

  getOneCharacter(id: string): Observable<CharacterDetailResponse> {
    return this.http.get<CharacterDetailResponse>(`${this.baseUrl}/${id}`);
  }
}
