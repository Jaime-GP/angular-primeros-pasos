import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.services';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters():Character[]{
    return [...this.dbzService.characters]; //hace una copia
  }

  onDeleteCharacter (id:string):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter (character:Character):void {
    this.dbzService.addCharacter(character);
  }
}
