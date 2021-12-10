import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { PokemonsSService } from '../_services/pokemons-s.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  pokemones:any[];
  suma:string="";
  constructor(
    private pokemonService:PokemonsSService
  ) { }
  ngOnInit() {
    
  }
  ionViewWillEnter():void{ 
    /*Asegura que cada ves que entremos a la pagina
     se asegura de volver a cargar los archivos*/
    this.pokemonService.getPokemons().subscribe(data=>{
      this.pokemones=data;
      console.log(data);
    })
  }
 

}
