import { Injectable } from '@angular/core';
import { Lightbulb } from '../types/LightBulb';

@Injectable({
  providedIn: 'root'
})
export class LightStateServiceService {

  lightbulbs: Lightbulb[] = [];

  constructor() { }

  id: number=0;

  addLightBulb(){
    this.lightbulbs.push({id: this.id, state: false});
    this.id++;
  }

  /*setLightBulb(number: number){
    this.lightbulbs.push({id: number, state: false});
  }*/

  getLampeState(id: number): boolean{
    let bulbFiltered = this.lightbulbs.filter(bulb => bulb.id === id);
    if(bulbFiltered.length === 1){
      return bulbFiltered[0].state;
    }
    return false;
  }

  setLampeState(id: number, state: boolean): void{
    let bulbFiltered = this.lightbulbs.filter(bulb => bulb.id === id);
    if(bulbFiltered.length === 1){
      bulbFiltered[0].state = state;
    }
  }
}
