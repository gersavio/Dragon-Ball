import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'Ironman';
  public age:number = 45;

  get capitalizaName():string {
    return this.name.toUpperCase()
  }

  getHeroesDescription():string {
    return `${this.name} ->  ${this.age}`
  }

  changeHero():void{
    this.name = 'Spiderman';
  }

  changeAge(){
    this.age = 30;
  }
  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
