import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-childexamples',
  templateUrl: './childexamples.component.html',
  styleUrls: ['./childexamples.component.scss'],
})
export class ChildexamplesComponent implements OnInit {

  @Input() simple: string;
  @Input() complex: object;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit Child');
  }

  ngOnChanges(changes) {
    console.log('ngOnChanges Child');
    
    // console.log(changes);
    // console.log({ simple: this.simple });
    // console.log({ complex: this.complex });
  }
}
