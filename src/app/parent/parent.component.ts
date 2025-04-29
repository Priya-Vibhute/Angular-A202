import { Component } from '@angular/core';
import { ChildComponent, Student } from '../child/child.component';
import { log } from 'console';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentData:any={ message:"Data sent succesffully",status:"OK"}
  receivedStudent:Student={id:0,name:""};
 

  getStudent(data:Student)
  {
     this.receivedStudent=data;
  }

  recievedMessage(data:string)
  {
   
     alert(data)
  }

  receivedArray(data:string[])
  {
     console.log("Parent Component",data)
  }
}
