import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { products } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-testexamples',
  templateUrl: './testexamples.component.html',
  styleUrls: ['./testexamples.component.scss'],
})
export class TestexamplesComponent implements OnInit {
  constructor(public _fb: FormBuilder, public _api: ApiService) {}

  public urlFromServerForImage;

  public products: products[];

  public form: FormGroup;

  public show: { [key: string]: boolean } = {};

  public indexOfProduct;

  public testArray = [
    { id: '1', name: 'one' },
    { id: '2', name: 'two' },
    { id: '3', name: 'three' },
    { id: '4', name: 'four' },
    { id: '5', name: 'five' },
    { id: '6', name: 'six' },
    { id: '7', name: 'seven' },
    { id: '8', name: 'eight' },
  ];

  profileFormArray = this._fb.group({
    productsForm: this._fb.array([]),
  });

  get productsForm() {
    return this.profileFormArray.get('productsForm') as FormArray;
  }

  //====================================================================================>

  public ngOnInit(): void {
    this._api.getImage({ ref: '20.png' }).subscribe({
      next: (res) => {
        console.log(res);
        this.urlFromServerForImage = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete file sync');
      },
    });

    this._api.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res;
        this.products.forEach((ob) => {
          this.productsForm.push(
            this._fb.control(ob.productName, [
              Validators.required,
              Validators.minLength(3),
            ])
          );
        });
        console.log(this.productsForm); 
      },
    });
  }

  checkArrayOfProductsInForm(e) {
    console.log(e);
    console.log(this.productsForm);

    this.products.forEach((ob, i) => {
      ob.productName = this.productsForm.controls[i].value;
    });
    console.log(this.products);
    this.productsForm.controls[this.indexOfProduct].reset();
  }

  changeIndexOfProduct(i) {
    this.indexOfProduct = i;
  }

  //====================================================================================>

  changeName(product, value, e) {
    console.log(e);

    product.productName = value;

    console.log(this.products);
  }

  showFunction(id) {
    console.log(this.show[id]);
    this.show[id] = !this.show[id];
    console.log(this.show);
  }

  //====================================================================================>
}
