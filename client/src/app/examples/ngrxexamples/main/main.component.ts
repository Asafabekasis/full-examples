import { Component, OnInit } from '@angular/core';
import { Store, createAction } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainActions from './../main.actions';
import { ApiService } from 'src/app/services/api.service';
import * as selectors from './../main.selectors'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products$: Observable<any>;
  customers$: Observable<any>;

  count$: Observable<number>;
  count2$: Observable<number>;
  count50$: Observable<number>;

  constructor(
    private store: Store<{ products: []; customers: [],count:number,count2 }>,
    private _api: ApiService
  ) {
    this.count$ = store.select('count');
  }

  ngOnInit() {

  }

  increment1000(){
    this.store.dispatch(mainActions.groupPageActionsCounter.increment1000({val1:1000,val2:[{val:2000}]}));
  }

  increment100(){
    this.store.dispatch(mainActions.groupPageActionsCounter.increment100({val1:100,val2:200}));
  }

  increment10(){                     
    //single parameter                               
    this.store.dispatch(mainActions.groupPageActionsCounter.increment10({payload:10}));
  }

  increment() {
    this.store.dispatch(mainActions.groupPageActionsCounter.incrementBlahBlah());
  }

  decrement() {
    this.store.dispatch(mainActions.groupPageActionsCounter.decrement());
  }

  reset() {
    this.store.dispatch(mainActions.groupPageActionsCounter.reset());
  }

  increment2() {
    this.store.dispatch(createAction('[Counter Component] Increment2')());
  }


}