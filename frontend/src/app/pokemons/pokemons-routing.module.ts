import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsPage } from './pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonsPage
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./pokemon-view/pokemon-view.module').then( m => m.PokemonViewPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pokemon-create/pokemon-create.module').then( m => m.PokemonCreatePageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pokemon-edit/pokemon-edit.module').then( m => m.PokemonEditPageModule)
  },
  {
    path: 'delete/:id',
    loadChildren: () => import('./pokemon-delete/pokemon-delete.module').then( m => m.PokemonDeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsPageRoutingModule {}
