import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-relation-manager-layout',
  templateUrl: './sales-relation-manager-layout.component.html',
  styleUrls: ['./sales-relation-manager-layout.component.scss']
})
export class SalesRelationManagerLayoutComponent {
  collapedSideBar: boolean;

  constructor() {}

  ngOnInit() {}

  receiveCollapsed($event) {
      this.collapedSideBar = $event;
  }
}
