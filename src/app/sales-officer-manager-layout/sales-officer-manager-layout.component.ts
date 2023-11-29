import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-officer-manager-layout',
  templateUrl: './sales-officer-manager-layout.component.html',
  styleUrls: ['./sales-officer-manager-layout.component.scss']
})
export class SalesOfficerManagerLayoutComponent {
  collapedSideBar: boolean;

  constructor() {}

  ngOnInit() {}

  receiveCollapsed($event) {
      this.collapedSideBar = $event;
  }
}
