import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-formarrayexamples2',
  templateUrl: './formarrayexamples2.component.html',
  styleUrls: ['./formarrayexamples2.component.scss'],
})
export class Formarrayexamples2Component implements OnInit {
  constructor(public _api: ApiService, public _fb: FormBuilder) {}

  public uploadformGroup= this._fb.group({
    products: new FormArray([], [Validators.required], []),
  });

  get arrayformControls() {
    return (this.uploadformGroup.get('products') as FormArray).controls;
  }

  public results

  ngOnInit(): void {
    this._api.getProducts().subscribe({
      next: (res) => {
        this.results = res;
        this.results.forEach((ob) => {
          this.arrayformControls.push(
            new FormGroup({
              productName: new FormControl(ob.productName),
            })
          );
          // this.insertNewProduct(
          //   ob.productName,
          //   ob.id,
          //   ob.color,
          //   ob.price,
          //   ob.section,
          //   ob.active
          // );
        });
      },
      error: (err) => {},
      complete: () => {
        console.log( this.arrayformControls);
                
        // console.log('complete');
        // console.log(this.arrayformControls);
        // console.log(this.uploadformGroup);
      },
    });
  }

  formGroupArraySubmit(e, i, value?) {
    console.log('this.arrayformControls', this.arrayformControls);
    // this.arrayformControls[i].get('productName').setValue(value);
  }

  // insertNewProduct(productName, id, color, price, section, active) {
  //   this.arrayformControls.push(
  //     new FormGroup({
  //       productName: new FormControl(productName),
  //     })
  //   );
  // }

  // setProductFormData({ productName, id, color, price, section, active }) {
  //   return new FormGroup(
  //     {
  //       productName: new FormControl(productName, [], []),
  //       id: new FormControl(id, [], []),
  //       color: new FormControl(color, [], []),
  //       price: new FormControl(price, [], []),
  //       section: new FormControl(section, [], []),
  //       active: new FormControl(active, [], []),
  //     },
  //     [],
  //     []
  //   );
  // }
}

//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
//==========================================================================================================================>
// import { AfterViewInit, Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormArray,
//   FormControl,
//   FormGroup,
//   Validators,
// } from '@angular/forms';
// import { ApiService } from 'src/app/services/api.service';

// @Component({
//   selector: 'app-formarrayexamples2',
//   templateUrl: './formarrayexamples2.component.html',
//   styleUrls: ['./formarrayexamples2.component.scss'],
// })
// export class Formarrayexamples2Component implements OnInit, AfterViewInit {
//   constructor(public _api: ApiService, public _fb: FormBuilder) {}

//   public uploadformGroup: FormGroup = new FormGroup({
//     products: new FormArray([], [Validators.required], []),
//   });

//   get arrayformControls() {
//     return (this.uploadformGroup.get('products') as FormArray).controls;
//   }

//   profileForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//     address: new FormGroup({
//       street: new FormControl(''),
//       city: new FormControl(''),
//       state: new FormControl(''),
//       zip: new FormControl(''),
//     }),
//   });

//   public form: FormGroup;

//   ngOnInit(): void {
//     this.form = this._fb.group({
//       fieldOne: ['', [Validators.required, Validators.minLength(4)]],
//       fieldTwo: ['', Validators.required],
//       fieldThree: ['', Validators.required],
//     });

//     this.form.addControl('added', new FormControl('', Validators.required), {
//       emitEvent: false,
//     });
//     // this.form.addControl(`id-2`, new FormControl('', Validators.required), {
//     //   emitEvent: false,
//     // });
//     // this.form.addControl(`id-4`, new FormControl('', Validators.required), {
//     //   emitEvent: false,
//     // });
//   }

//   address(e) {
//     this.profileForm.patchValue({
//       firstName: 'Nancy',
//       address: {
//         street: '123 Drew Street',
//       },
//     });
//     console.log('this.profileForm.value', this.profileForm.value);
//     console.log(
//       'this.profileForm.controls.address',
//       this.profileForm.controls.address
//     );
//     this.profileForm.controls.address.controls.city.setValue('BALVALAVLAV');
//   }

//   onSubmitFormBuilder(e) {
//     console.log('event onSubmitFormBuilder', e);
//     console.log('this.form', this.form);
//   }

//   formGroupArraySubmit(e, i) {
//     console.log('this.arrayformControls', this.arrayformControls);
//     this.arrayformControls[i].get('product.productName').setValue('aaaaa');
//   }

//   insertNewProduct(productName, id, color, price, section, active) {
//     this.arrayformControls.push(
//       new FormGroup({
//         product: this.setProductFormData({
//           productName: productName,
//           id: id,
//           color: color,
//           price: price,
//           section: section,
//           active: active,
//         }),
//       })
//     );
//   }

//   productKeUpChange(e, i, value) {
//     this.arrayformControls[i].get('product.productName').setValue(value);
//   }

//   setProductFormData({ productName, id, color, price, section, active }) {
//     return new FormGroup(
//       {
//         productName: new FormControl(productName, [], []),
//         id: new FormControl(id, [], []),
//         color: new FormControl(color, [], []),
//         price: new FormControl(price, [], []),
//         section: new FormControl(section, [], []),
//         active: new FormControl(active, [], []),
//       },
//       [],
//       []
//     );
//   }

//   ngAfterViewInit(): void {
//     this._api.getProducts().subscribe({
//       next: (res) => {
//         let results = res;
//         console.log('results', results);
//         results.forEach((ob) => {
//           this.insertNewProduct(
//             ob.productName,
//             ob.id,
//             ob.color,
//             ob.price,
//             ob.section,
//             ob.active
//           );
//         });
//       },
//       error: (err) => {},
//       complete: () => {
//         // console.log('complete');
//         // console.log(this.arrayformControls);
//         // console.log(this.uploadformGroup);
//       },
//     });
//   }
// }
