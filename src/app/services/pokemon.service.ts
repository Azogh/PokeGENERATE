import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getRandomPokemon(): Observable<any> {
    const randomId = Math.floor(Math.random() * 898) + 1; // Geração de um ID aleatório entre 1 e 898
    return this.http.get<any>(`${this.apiUrl}${randomId}`);
  }
}
