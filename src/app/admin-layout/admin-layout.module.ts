import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AdminRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { HeaderComponent } from './sharedcomponents/header/header.component';
import { SidebarComponent } from './sharedcomponents/sidebar/sidebar.component';
@NgModule({
    imports: 
        [
        CommonModule, AdminRoutingModule,
        TranslateModule,NgbDropdownModule
    ],
    declarations: [AdminLayoutComponent,HeaderComponent,SidebarComponent]

})
export class AdminLayoutModule {}
