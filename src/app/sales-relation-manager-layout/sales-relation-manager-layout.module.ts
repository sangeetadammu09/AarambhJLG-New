import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SalesRelationManagerLayoutComponent } from './sales-relation-manager-layout.component';
import { HeaderComponent } from './sharedcomponents/header/header.component';
import { SidebarComponent } from './sharedcomponents/sidebar/sidebar.component';
import { SalesRelationManagerRoutingModule } from './sales-relation-manager-layout-routing.module';


@NgModule({
    imports: 
        [
        CommonModule,SalesRelationManagerRoutingModule,
        TranslateModule,NgbDropdownModule
    ],
    declarations: [SalesRelationManagerLayoutComponent,HeaderComponent,SidebarComponent]

})
export class SalesRelationManagerLayoutModule {}
