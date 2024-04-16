import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-formexamples',
  templateUrl: './formexamples.component.html',
  styleUrls: ['./formexamples.component.scss'],
})
export class FormexamplesComponent implements OnInit {
  //Basic form control
  favoriteColorControl = new FormControl('');
  favoriteColor = '';

  public names: FormArray;

  //======================================================>
  //Basic form group
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
  });

  get fieldOneGet() {
    return this.form.get('fieldOne').value;
  }

  //======================================================>

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

  //======================================================>

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

  //======================================================>

  constructor(public _fb: FormBuilder) {}

  public form: FormGroup;

  ngOnInit(): void {
    this.names = new FormArray([new FormControl('Alex')]);
    this.names.push(new FormControl('Jess'));

    // console.log('this.names', this.names);

    this.form = this._fb.group({
      fieldOne: ['', [Validators.required, Validators.minLength(4)]],
      fieldTwo: ['', Validators.required],
      fieldThree: ['', Validators.required],
    });

    this.form.addControl(
      'otherSite',
      new FormControl('', Validators.required),
      { emitEvent: false }
    );
    this.form.addControl(`id-2`, new FormControl('', Validators.required), {
      emitEvent: false,
    });
    this.form.addControl(`id-4`, new FormControl('', Validators.required), {
      emitEvent: false,
    });

    // console.log(this.form);
    // console.log('this.profileFormArray', this.profileFormArray);

    setTimeout(() => {
      // this.form.addControl('',["",Validators.required],)

      // for(let x = 0 ; x <10 ; x++){
      //   this.form.addControl(`id${x}`, 1)
      // }
      for (let x = 0; x < 10; x++) {
        this.aliases.push(
          this._fb.control('aaa', [
            Validators.required,
            Validators.minLength(3),
          ])
        );

        setTimeout(() => {
          this.profileFormArray.controls.aliases.controls[2].reset();
        }, 1000);
      }
    }, 2000);
  }

  check(e, val?) {
    console.log(val);
    console.log('event', e);
    console.log('Form Control', this.favoriteColorControl);
    console.log('Template Drivin ngModel', this.favoriteColor);

    setTimeout(() => {
      this.favoriteColorControl.setValue('12345');
      this.favoriteColor = '12345';
    }, 2000);
  }

  onSubmit(e) {
    console.log('event', e);
    console.log(this.profileForm.value);
    console.log(this.profileForm.controls.firstName.value);
  }

  onSubmitFormBuilder(e) {
    console.log('event', e);
    console.log(this.form);
    setTimeout(() => {
      // this.form.controls['fieldOne'].setValue('12345')
      this.favoriteColor = '12345';
    }, 2000);
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
}
