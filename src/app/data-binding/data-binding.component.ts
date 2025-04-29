import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  name:string="Manisha";
  color:string="red";
  border:string="2px solid red"
  isError:boolean=false;
  borderRadius:string=""
  
  firstNum:number=5;
  secondNum:number=6;

  showAlert()
  {
    alert("Event Data Binding")
  }

  changeBorder()
  {
    this.border="3px dotted black";
  }

  makeCircle()
  {
    this.isError=!this.isError;
  }

}
