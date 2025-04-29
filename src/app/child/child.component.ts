import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Student
{
   id:number;
   name:string;
   marks?:number;
}

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() childData:EventEmitter<string>=new EventEmitter<string>();
  @Input() receivedData:any;
  @Output() elements=new EventEmitter<string[]>();
  @Output() students=new EventEmitter<Student>();

  sendStudent()
  {
    this.students.emit({id:101,name:"ABC"})
  }


  sendMessage()
  {
    this.childData.emit("XYZ")
  }

  sendElements()
  {
    this.elements.emit(["A","B","C"])
  }

}
