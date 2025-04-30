import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgSwitchExampleComponent } from '../ng-switch-example/ng-switch-example.component';

@Component({
  selector: 'app-directive-example',
  imports: [CommonModule,NgSwitchExampleComponent],
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.css'
})
export class DirectiveExampleComponent {
   
  status:boolean=false;
  loggedIn:boolean=false;
  data=["A","B","C","D","E"]
  colors=["red","blue","purple"]
  students=[
    {studentId:101,studentName:"ABC"},
    {studentId:102,studentName:"PQR"}
  ]

  login()
  {
    this.loggedIn=!this.loggedIn
  }

}
