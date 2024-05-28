import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  flatMap,
  forkJoin,
  from,
  groupBy,
  lastValueFrom,
  map,
  mergeAll,
  mergeMap,
  reduce,
  switchMap,
  tap,
  toArray,
} from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { products } from 'src/app/interfaces';

@Component({
  selector: 'app-rxjsexamples2',
  templateUrl: './rxjsexamples2.component.html',
  styleUrls: ['./rxjsexamples2.component.scss'],
})
export class Rxjsexamples2Component implements OnInit {
  constructor(public apiService: ApiService) {}

  public resultsOf

  ngOnInit(): void {
    this.apiService
      .getProductsNotObservable()
      .pipe(
        mergeAll(), // will seperate the array to objects
        // mergeMap(ob=>ob.id),
        groupBy(ob => {return{...ob,id:ob.id + 1000}}), // will create observable to each object id
        toArray(), // convert all objects to one array
        // map((ob) => {return{...ob,id:ob.id + 1000}}), // will return the complete object with id + 1000
        tap(res=>console.log('tap',res)),
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.resultsOf = res
          this.keepGoing()
        },
        error: (err) => {
          console.log('error',err);
          console.log('error',err.status);
          
        },
        complete: () => {
          console.log('request completed');
        },
      });
  }

  keepGoing(){

    forkJoin(this.resultsOf).subscribe( (x)=> console.log(x))
    
    // x.pipe(tap(res=>console.log('tap',res))).subscribe(
    //   res=>{
    //     console.log('aaa[0].subscribe');
        
    //   }
    // )
  }

}
