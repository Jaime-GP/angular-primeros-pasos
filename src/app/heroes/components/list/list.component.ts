import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Hulk','Ironman'];
  public deleteHero?: string;

  removeLastHero():void  {
    //this.heroNames.shift() //primero
    this.deleteHero = this.heroNames.pop();
  }

}
