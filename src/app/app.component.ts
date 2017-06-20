import { Component, OnInit } from '@angular/core';
import { Customer } from './TS/customer';
import { DataService } from './data-service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'Project CV online, which is applyed Angular4 + Spring Boot + JPA';
  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private dataService: DataService) { }

  getCustomers() {
    return this.dataService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }
}
