import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { toTitleCasePipe } from '../../pipes/toTitleCase.pipe';

@Component({
  selector: 'app-pokemon-random',
  templateUrl: './pokemon-random.component.html',
  styleUrls: ['./pokemon-random.component.scss'],
  standalone: true,
  imports: [toTitleCasePipe, CommonModule]
})


export class PokemonRandomComponent implements OnInit {
  pokemon: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getRandomPokemon().subscribe(data => {
      this.pokemon = data;
    });
  }
}
