import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsSService } from 'src/app/_services/pokemons-s.service';

@Component({
  selector: 'app-pokemon-delete',
  templateUrl: './pokemon-delete.page.html',
  styleUrls: ['./pokemon-delete.page.scss'],
})
export class PokemonDeletePage implements OnInit {
  pokemon_id:any;
  pokemon_date:any;
  constructor(
    private activatedRoute:ActivatedRoute, //Para sacar el Id
    private pokemonService:PokemonsSService, //Lamar el servicio
    private router:Router //Para que vueva al incio despues de la accion
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data=>{
        this.pokemon_id=data.get('id'); //El id es de la base de datos
        this.pokemonService.getPokemonsById(this.pokemon_id).subscribe(
          response=>{
            console.log(response)
            this.pokemon_date=response;
          },
          error=>{console.log(error);}
        )
      }
    )
  }
  deletePokemon(pokemon_id:any){ //Primero tenemos que crear el servicio
    this.pokemonService.deletePokemon(this.pokemon_id).subscribe(
      response=>{
        console.log(response);
        this.pokemon_date=response;
        this.router.navigate(['/pokemons'])
      },
      error=>{console.log(error);}
    )
  }
  

}
