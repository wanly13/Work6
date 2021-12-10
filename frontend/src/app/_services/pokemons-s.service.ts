import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonsSService {

  constructor(
    private http: HttpClient
  ) { }
  //Llamada GET-> http://localhost:3000/pokemons
  getPokemons(){
    return this.http.get<any>('http://localhost:3000/pokemons');
  }

  getPokemonsById(id:any){
    return this.http.get<any>(`http://localhost:3000/pokemons/${id}`);
  }

  insertPokemon(pokemones:any){ //pokemones = toda la data del pokemons routing
    return this.http.post<any>('http://localhost:3000/pokemons',pokemones);
  }

  updatePokemon(id:any,pokemones:any){
    return this.http.put<any>(`http://localhost:3000/pokemons/${id}`,pokemones);
  }
  deletePokemon(id:any){
    return this.http.delete<any>(`http://localhost:3000/pokemons/${id}`);
  }
}
