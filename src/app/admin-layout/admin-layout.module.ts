import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AdminRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';


@NgModule({
    imports: 
        [
        CommonModule, AdminRoutingModule,
        TranslateModule,NgbDropdownModule
    ],
    declarations: [AdminLayoutComponent]

})
export class AdminLayoutModule {}
