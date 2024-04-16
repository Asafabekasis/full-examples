import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class Formarrayexamples2Component implements OnInit, AfterViewInit {
  constructor(public _api: ApiService, public _fb: FormBuilder) {}

  public uploadformGroup: FormGroup = new FormGroup({
    products: new FormArray([], [Validators.required], []),
  });

  get arrayformControls() {
    return (this.uploadformGroup.get('products') as FormArray).controls;
  }

  //==========================================================================================================================>
  //==========================================================================================================================>
  //==========================================================================================================================>
  //==========================================================================================================================>
  //==========================================================================================================================>

  profileForm2 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  public form: FormGroup;

  ngOnInit(): void {
    this.form = this._fb.group({
      fieldOne: ['', [Validators.required, Validators.minLength(4)]],
      fieldTwo: ['', Validators.required],
      fieldThree: ['', Validators.required],
    });

    // this.form.addControl(
    //   'otherSite',
    //   new FormControl('', Validators.required),
    //   { emitEvent: false }
    // );
    // this.form.addControl(`id-2`, new FormControl('', Validators.required), {
    //   emitEvent: false,
    // });
    // this.form.addControl(`id-4`, new FormControl('', Validators.required), {
    //   emitEvent: false,
    // });
  }

  address(e) {
    this.profileForm2.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
    console.log(this.profileForm2.value);
    console.log(this.profileForm2.controls.address);
    this.profileForm2.controls.address.controls.city.setValue('BALVALAVLAV');
  }

  //==========================================================================================================================>
  //==========================================================================================================================>
  //==========================================================================================================================>
  //==========================================================================================================================>
  //==========================================================================================================================>

  onSubmitFormBuilder(e) {
    console.log('event', e);
    console.log(this.form);
  }

  insertNewProduct(productName, id, color, price, section, active) {
    this.arrayformControls.push(
      new FormGroup({
        product: this.setProductFormData({
          productName: productName,
          id: id,
          color: color,
          price: price,
          section: section,
          active: active,
        }),
      })
    );
  }

  productKeUpChange(e, i, value) {
    this.arrayformControls[i].get('product.productName').setValue(value);
  }

  setProductFormData({ productName, id, color, price, section, active }) {
    return new FormGroup(
      {
        productName: new FormControl(productName, [], []),
        id: new FormControl(id, [], []),
        color: new FormControl(color, [], []),
        price: new FormControl(price, [], []),
        section: new FormControl(section, [], []),
        active: new FormControl(active, [], []),
      },
      [],
      []
    );
  }

  aaa(e, i) {
    console.log(this.arrayformControls);
    console.log(e);
  }

  ngAfterViewInit(): void {
    this._api.getProducts().subscribe({
      next: (res) => {
        let results = res;
        console.log('results', results);
        results.forEach((ob) => {
          this.insertNewProduct(
            ob.productName,
            ob.id,
            ob.color,
            ob.price,
            ob.section,
            ob.active
          );
        });
      },
      error: (err) => {},
      complete: () => {
        // console.log('complete');
        // console.log(this.arrayformControls);
        // console.log(this.uploadformGroup);
      },
    });
  }
}
