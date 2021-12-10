import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsSService } from 'src/app/_services/pokemons-s.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.page.html',
  styleUrls: ['./pokemon-view.page.scss'],
})
export class PokemonViewPage implements OnInit {
  date_pokemon:any;
  constructor(
    private activadedRoute: ActivatedRoute,
    private pokemonsService:PokemonsSService
  ) { }

  ngOnInit() {
    this.activadedRoute.paramMap.subscribe(
      data=>{
        const id=data.get('id');
        this.pokemonsService.getPokemonsById(id).subscribe(
          response=>{
            console.log(response);
            this.date_pokemon=response;
          },
          error=>{
            console.log(error);
          }
        )
      }
    )
  }

}
