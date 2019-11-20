import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail-shop',
  templateUrl: './detail-shop.component.html',
  styleUrls: ['./detail-shop.component.css']
})
export class DetailShopComponent implements OnInit {

  detailShopForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.detailShopForm = this.fb.group({
    //   name: [''],
    //   address: [''],
    //   isDefault: ['']
    // });
  }

  onSubmit() {

  }

}
