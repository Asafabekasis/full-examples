import { Component, OnInit } from '@angular/core';
import { concatMap, groupBy, map, mergeAll, mergeMap, reduce, tap, toArray } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { products } from 'src/app/interfaces';

@Component({
  selector: 'app-rxjsexamples2',
  templateUrl: './rxjsexamples2.component.html',
  styleUrls: ['./rxjsexamples2.component.scss'],
})
export class Rxjsexamples2Component implements OnInit {
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getProductsNotObservable()
      .pipe(
        mergeAll(), // will seperate the array to objects
        // groupBy(ob => ob.id), // will create observable to each object id
        map((x) => {return{...x,id:x.id + 1000}}),
        toArray(), // convert all objects to one array

      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {},
        complete: () => {
          console.log('request completed');
        },
      });
  }

  // ngOnInit(){
  //   this.fetchData();
  // }

  // private fetchData(){
  //   const promise = this.apiService.getProducts().toPromise();
  //   console.log(promise);  
  //   promise.then((data)=>{
  //     console.log("Promise resolved with: " + JSON.stringify(data));
  //   }).catch((error)=>{
  //     console.log("Promise rejected with " + JSON.stringify(error));
  //   });
  // }
}
