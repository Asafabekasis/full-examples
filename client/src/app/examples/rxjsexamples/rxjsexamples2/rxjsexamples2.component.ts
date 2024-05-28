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
  of,
  reduce,
  switchMap,
  tap,
  toArray,
  zip,
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
          console.log('res',res);
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

      // const age = of(27, 25, 29);
      // const name = of('Foo', 'Bar', 'Beer');
      // const isDev = of(true, true, false);

      // zip(age, name, isDev)
      // .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
      // .subscribe((x) => console.log(x));
  }

  keepGoing(){
    console.log('in keep going');
    
    of(this.resultsOf).subscribe( (x)=>{
      var keys = []
      x.forEach(element => {
        keys.push(element.key)
      });
      console.log(keys);
      
    })

  }

}
