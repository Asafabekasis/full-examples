import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-formarrayexamples',
  templateUrl: './formarrayexamples.component.html',
  styleUrls: ['./formarrayexamples.component.scss'],
})
export class FormarrayexamplesComponent implements OnInit {
  constructor(public _api: ApiService) {}

  public uploadformGroup: FormGroup = new FormGroup({
    products: new FormArray([], [Validators.required], []),
  });

  get arrayformControls() {
    return (this.uploadformGroup.get('products') as FormArray).controls;
  }

  ngOnInit(): void {
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
        console.log('complete');
      },
    });
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

    console.log(this.arrayformControls);
  }

  productClicked( e, i) {
    console.log(e);
    console.log(i);
    
    this.arrayformControls[i].get('product.productName').setValue('papapapa');
  }

  setProductFormData({ productName, id, color, price, section, active }) {
    return new FormGroup(
      {
        productName: new FormControl(productName, [], []),
        id: new FormControl(id, [], []),
        color:new FormControl(color, [], []),
        price: new FormControl(price, [], []),
        section:new FormControl(section, [], []),
        active:new FormControl(active, [], [])
      },
      [],
      []
    );
  }
}
