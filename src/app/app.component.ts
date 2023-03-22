import { Component, OnInit } from '@angular/core';
import { LightStateServiceService } from './services/light-state-service.service';
import { MonserviceService } from './services/monservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularJava';
  foo=0;
  bar="";
  arr: Number[] =[];
  test1: String="";

  constructor(private service: MonserviceService, public lightService: LightStateServiceService){}

  increment(){
    this.foo ++;
    this.arr.push(this.foo);
    this.lightService.addLightBulb();
  }

  ngOnInit(): void {
    this.increment();
    this.test1 = this.service.getTest1();
    this.lightService.addLightBulb();
    this.lightService.addLightBulb();
  }

  setValue(value: any){
    this.service.setTest1(value);
  }

}
