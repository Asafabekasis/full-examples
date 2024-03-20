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

  public urlFromServerForImage

  public products: products[];

  public form: FormGroup;

  public show: { [key: string]: boolean } = {}

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
    firstName: ['', Validators.required],
    lastName: [''],
    address: this._fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this._fb.array([
      this._fb.control('', [Validators.required, Validators.minLength(3)]),
    ]),
  });

  get aliases() {
    return this.profileFormArray.get('aliases') as FormArray;
  }

  //====================================================================================>

  public ngOnInit(): void {

    this._api.getImage({ref:"20.png"}).subscribe({
      next:(res)=>{
        console.log(res);
        this.urlFromServerForImage = res
      },
      error:(err)=>{
        console.log((err)); 
      },
      complete:()=>{
        console.log('complete file sync');
      }
    })

    // this._api.getProducts().subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.products = res;
    //   },
    // });

    // for (let x = 0; x < 10; x++) {
    //   this.aliases.push(
    //     this._fb.control('aaa', [Validators.required, Validators.minLength(3)])
    //   );

    //   setTimeout(() => {
    //     this.profileFormArray.controls.aliases.controls[2].reset();
    //   }, 1000);
    // }
  }

  addAlias(e) {
    this.aliases.push(
      this._fb.control('', [Validators.required, Validators.minLength(3)])
    );

    console.log('event', e);

    console.log('this.aliases', this.aliases);
    console.log('this.profileFormArray.value', this.profileFormArray.value);
    console.log('this.profileFormArray', this.profileFormArray);
    console.log(
      'this.profileFormArray.aliases',
      this.profileFormArray.controls.aliases
    );

    setTimeout(() => {
      this.profileFormArray.controls.aliases.controls[0].setValue('00000');
    }, 2000);
  }

  //====================================================================================>

  changeName(product, value, e) {
    product.productName = value;
  }

  showFunction(id){
    console.log(this.show[id]);
    this.show[id] = !this.show[id]
    console.log(this.show);
    
  
  }

  //====================================================================================>
}
