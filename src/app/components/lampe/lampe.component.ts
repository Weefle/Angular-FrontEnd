import { Component, Input } from '@angular/core';
import { LightStateServiceService } from 'src/app/services/light-state-service.service';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css']
})
export class LampeComponent {

  state: boolean=false;
  @Input("id")
  id: number=0;


  getLampeState(): String {
    if (this.service.getLampeState(this.id)) {
      return "on";
    } else {
      return "off";
    }
  }

  setLampeState(): void{
    this.service.setLampeState(this.id, !this.service.getLampeState(this.id));
  }

  constructor(private service: LightStateServiceService){

  }

}
