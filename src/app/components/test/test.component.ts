import { Component, Input, Output } from '@angular/core';
import { MonserviceService } from 'src/app/services/monservice.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Input()
  foo="";

  @Output()
  to="";

constructor(public service: MonserviceService){

}

}
