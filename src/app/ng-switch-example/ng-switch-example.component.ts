import { Component } from '@angular/core';
import { stat } from 'fs';

@Component({
  selector: 'app-ng-switch-example',
  imports: [],
  templateUrl: './ng-switch-example.component.html',
  styleUrl: './ng-switch-example.component.css'
})
export class NgSwitchExampleComponent {

  requestStatus="pending"

  changeStatus(status:string)
  {
   this.requestStatus=status;
  }

}
