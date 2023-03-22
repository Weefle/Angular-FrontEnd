import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonserviceService {

  private test1: String ="test from service !";

  constructor() { }

  getTest1(){
    return this.test1;
  }

  setTest1(setTest: String){
    this.test1 = setTest;
  }
}
