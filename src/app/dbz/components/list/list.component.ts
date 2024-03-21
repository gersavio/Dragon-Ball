import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-ist',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 100
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id?:string):void{

    if ( !id) return;
    console.log({id})

    this.onDelete.emit (id)
  }


}