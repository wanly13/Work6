import { TestBed } from '@angular/core/testing';

import { PokemonsSService } from './pokemons-s.service';

describe('PokemonsSService', () => {
  let service: PokemonsSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
