import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotosService } from 'src/app/_services/photos.service';
import { PokemonsSService } from 'src/app/_services/pokemons-s.service';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.page.html',
  styleUrls: ['./pokemon-create.page.scss'],
})
export class PokemonCreatePage implements OnInit {
  pokemonsForm : FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private pokemonService:PokemonsSService,
    private router: Router,
    private photoService: PhotosService
  ) { //Espacios a actualizar
    this.pokemonsForm=this.formBuilder.group({      
      name_p:[''],
      nickname_p:[''],
      image_p:[''],
      height_p:[''],
      weight_p:[''],
      category_p:[''],
      abilities_p:[''],
      type_p:['']

    })
  }
  ngOnInit() {
  }
  addPokemon(values:any){//Values cualquier parametro
    this.pokemonService.insertPokemon(values).subscribe(
      response=> {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error=>{console.log(error);}  
    )
  }
  async openCamera(){
    const picture_data=await this.photoService.takePicture();
    this.pokemonsForm.patchValue(picture_data); //Agregar la data al form
  }

}
