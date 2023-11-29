import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AdminRoutingModule } from './sales-officer-manager-layout-routing.module';
import { SalesOfficerManagerLayoutComponent } from './sales-officer-manager-layout.component';
import { HeaderComponent } from './sharedcomponents/header/header.component';
import { SidebarComponent } from './sharedcomponents/sidebar/sidebar.component';


@NgModule({
    imports: 
        [
        CommonModule, AdminRoutingModule,
        TranslateModule,NgbDropdownModule
    ],
    declarations: [SalesOfficerManagerLayoutComponent, HeaderComponent,SidebarComponent]

})
export class SalesOfficerManagerLayoutModule {}
