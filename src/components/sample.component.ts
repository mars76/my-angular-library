import { Component,Input } from '@angular/core';

@Component({
  selector: 'sample-component',
  templateUrl: './sample.component.html'
})
export class SampleComponent {

  @Input()
  name:string;
  constructor() {
  }

}
