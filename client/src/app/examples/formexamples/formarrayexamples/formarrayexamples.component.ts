import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarrayexamples',
  templateUrl: './formarrayexamples.component.html',
  styleUrls: ['./formarrayexamples.component.scss'],
})
export class FormarrayexamplesComponent implements OnInit {
  constructor() {}

  public uploadformGroup: FormGroup = new FormGroup({
    products: new FormArray([], [Validators.required], []),
  });

  get arrayformControls() {
    return (this.uploadformGroup.get('products') as FormArray).controls;
  }

  ngOnInit(): void {}

  insertNewProduct(productName, productId) {
    this.arrayformControls.push(
      new FormGroup({
        product: this.setProductFormData({
          productName: productName,
          productId: productId,
        }),
      })
    );

    console.log(this.arrayformControls);
  }

  productClicked(product, e, i) {
    console.log(product);

    console.log(i);
    this.arrayformControls[i].get('product.productName').setValue('papapapa');
  }

  setProductFormData({ productName, productId }) {
    return new FormGroup(
      {
        productName: new FormControl(productName, [], []),
        ProductId: new FormControl(productId, [], []),
      },
      [],
      []
    );
  }
}
