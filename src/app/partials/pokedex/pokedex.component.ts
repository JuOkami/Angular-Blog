import { Component } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
})
export class PokedexComponent {
  public data: any;
  public pokedex: any[] = [];
  imageUrl: string = "chemin/vers/image-initiale.jpg";
  hoverImageUrl: string = "chemin/vers/image-survol.jpg";

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokedex = this.pokedexService.getPokedex(1, 895);
  }

  getStatsDisplay(pokemon: any) {
    return (
      'HP : ' +
      pokemon.stats.HP +
      ', Attaque : ' +
      pokemon.stats.attack +
      ', Défense : ' +
      pokemon.stats.defense +
      ', Attaque Spé. : ' +
      pokemon.stats.special_attack +
      ', Defense Spé. : ' + 
      pokemon.stats.special_defense +
      ', Vitesse : ' +
      pokemon.stats.speed
    );
  }

  getTypeDisplay(pokemon: any) {
    if (pokemon.apiTypes.length == 2){
      return pokemon.apiTypes[0].name+"/"+pokemon.apiTypes[1].name;
    } else {
      return pokemon.apiTypes[0].name;
    }
  }
}
