import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private _activeRoute: ActivatedRoute,
               private _heroesService: HeroesService) {

    this._activeRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })

  }



}
