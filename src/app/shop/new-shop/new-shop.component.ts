import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormGroupDirective
} from '@angular/forms';
import { Shop } from '../shop';
import * as uuid from 'uuid';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewShopComponent implements OnInit {
  @Output()
  saveShop = new EventEmitter<Shop>();

  @ViewChild(FormGroupDirective, { static: true })
  formGroupDirective: FormGroupDirective;

  newShopForm: FormGroup;

  clearShop = {
    name: '',
    address: '',
    favorite: false
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.configureForm();
  }

  private configureForm() {
    this.newShopForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      favorite: [false]
    });
  }

  resetForm() {
    this.formGroupDirective.resetForm();
    this.newShopForm.patchValue(this.clearShop);
  }

  onSubmit() {
    const shop: Shop = {
      ...this.newShopForm.value,
      id: uuid.v1()
    };
    this.saveShop.emit(shop);
    this.resetForm();
  }
}
