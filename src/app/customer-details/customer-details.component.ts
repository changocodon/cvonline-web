import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../TS/customer';

import { DataService } from '../data-service/data.service';

import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [DataService]
})
export class CustomerDetailsComponent implements OnInit {
  /**
   * Using @Input() to get data from AppComponent
   */
  @Input() customer: Customer;
  constructor() { }

  ngOnInit() {
  }

}
