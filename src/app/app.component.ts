import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@Component({
  selector: 'app-root',
  imports: [CategoryComponent,ProductComponent,DataBindingComponent,PipeExampleComponent,StudentComponent,ParentComponent,DirectiveExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
