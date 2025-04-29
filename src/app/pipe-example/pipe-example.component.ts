import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { GreetingPipe } from '../pipes/greeting.pipe';
import { SlicePipe } from '../pipes/slice.pipe';

@Component({
  selector: 'app-pipe-example',
  imports: [CommonModule,GreetingPipe,SlicePipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {

  currentDate=new Date();

}
