import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycleexamples',
  templateUrl: './lifecycleexamples.component.html',
  styleUrls: ['./lifecycleexamples.component.scss'],
})
export class LifecycleexamplesComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  constructor() {}

  public count:number = 0
  simple = 'some string';
  complex = { name: 'complex' };

  ngOnInit(): void {
    console.log('ngOnInit just happened');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit just happened');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy just happened');
  }

  changeSimple() {
    this.simple += '!';
  }

  changeComplexReplace() {
    this.complex = { name: 'complex change replace' };
  }

  changeComplexMutate() {
    this.complex.name = 'complex change mutate';
  }

  addCount(){
    this.count +=1
  }
}
