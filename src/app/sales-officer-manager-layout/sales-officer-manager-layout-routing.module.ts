import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterwiseCollectionComponent } from '../components/centerwise-collection/centerwise-collection.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';
import { CollectionHistoryComponent } from '../components/collection-history/collection-history.component';
import { CompletedOrdersComponent } from '../components/completed-orders/completed-orders.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DispatchedOrdersComponent } from '../components/dispatched-orders/dispatched-orders.component';
import { KycFailedUsersComponent } from '../components/kyc-failed-users/kyc-failed-users.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SalesOfficerManagerLayoutComponent } from './sales-officer-manager-layout.component';
import { ApprovedOrderComponent } from '../components/approved-order/approved-order.component';
import { MemberKycComponent } from '../components/member-kyc/member-kyc.component';
import { OrderDetailsComponent } from '../components/order-details/order-details.component';
import { ReturnedOrdersComponent } from '../components/returned-orders/returned-orders.component';
import { ReturnhistoryComponent } from '../components/returnhistory/returnhistory.component';
import { ValidityExpiringMembersComponent } from '../components/validity-expiring-members/validity-expiring-members.component';


const routes: Routes = [

    {
        path: '',
        component: SalesOfficerManagerLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path:'member-kyc', component: MemberKycComponent },
            {path:'order-details', component: OrderDetailsComponent },
            { path:'approved-order', component: ApprovedOrderComponent },
            { path:'my-profile', component: ProfileComponent },
            { path:'change-password', component: ChangePasswordComponent },
            { path:'product-details', component: ProductDetailComponent },
            { path:'returned-orders', component: ReturnedOrdersComponent },
            { path:'returnhistory', component: ReturnhistoryComponent },
            { path:'dashboard', component: DashboardComponent },
            { path:'kyc-failed-users', component: KycFailedUsersComponent },
            {path: 'validity-expiring-members', component: ValidityExpiringMembersComponent },
            {path:'dispatched-orders', component: DispatchedOrdersComponent },
            {path:'completed-orders', component: CompletedOrdersComponent },
            {path:'collection-history', component: CollectionHistoryComponent},
            {path:'centerwise-collection',component: CenterwiseCollectionComponent},
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
