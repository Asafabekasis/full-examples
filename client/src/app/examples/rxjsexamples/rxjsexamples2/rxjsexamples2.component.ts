import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  flatMap,
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

    this.fetchData()
    this.apiService
      .getProductsNotObservable()
      .pipe(
        mergeAll(), // will seperate the array to objects
        // mergeMap(ob=>ob.id),
        groupBy(ob => {return{...ob,id:ob.id + 1000}}), // will create observable to each object id
        tap(res=>console.log('tap',res)),
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
    console.log(this.resultsOf[0]);

    let x = this.resultsOf[0]
    
    x.pipe(tap(res=>console.log('tap',res))).subscribe(
      res=>{
        console.log('aaa[0].subscribe');
        
      }
    )
  // ngOnInit(){
  //   this.fetchData();
  }

  public async fetchData(){
    const t = ((n:number) => {
      return n * 10
    })(25);
    console.log(t);
    console.log('==============');

    for(var x = 0;x<5;x++){
      setTimeout(() => {
        console.log(x);
      }, 1000);
      
    }
    let flag = true;
    let index;
    for (;flag; ) {
      flag = index < 5;
      console.log(index);
      index++
      
    }


    const [, a] = await lastValueFrom(this.apiService.getProducts());
    console.log(a);
    const o = { 
      a1: 'aaaaa',
      b: 'bbbbbbbbbb',
      c: 'ccccccccc'
    };
    const { a1, b } = o;
    console.log(b);
    const ar = [1, 2, 3, 4, 5];
    const [first] = ar;
    const [last] = ar.reverse(); 
    // console.log(values);
    
    console.log((last));
    
    
    
    // const promise = this.apiService.getProducts().toPromise();
    // console.log(promise);
    // promise.then((data)=>{
    //   console.log("Promise resolved with: " + JSON.stringify(data));
    // }).catch((error)=>{
    //   console.log("Promise rejected with " + JSON.stringify(error));
    // });
  }
}
