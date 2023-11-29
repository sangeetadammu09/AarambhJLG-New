import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from '../components/center/center.component';
import { CenterwiseCollectionComponent } from '../components/centerwise-collection/centerwise-collection.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';
import { CollectionHistoryComponent } from '../components/collection-history/collection-history.component';
import { CompletedOrdersComponent } from '../components/completed-orders/completed-orders.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DispatchedOrdersComponent } from '../components/dispatched-orders/dispatched-orders.component';
import { MemberContactsComponent } from '../components/member-contacts/member-contacts.component';
import { MemberComponent } from '../components/member/member.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SalesRelationManagerLayoutComponent } from './sales-relation-manager-layout.component';
import { ApprovalpendingOrdersComponent } from '../components/approvalpending-orders/approvalpending-orders.component';
import { ApprovedOrderComponent } from '../components/approved-order/approved-order.component';
import { KycFailedMembersComponent } from '../components/kyc-failed-members/kyc-failed-members.component';
import { MemberKycComponent } from '../components/member-kyc/member-kyc.component';
import { MembershipHistoryComponent } from '../components/membership-history/membership-history.component';
import { MembershipComponent } from '../components/membership/membership.component';
import { NeworderComponent } from '../components/neworder/neworder.component';
import { PaymentComponent } from '../components/payment/payment.component';
import { RenewMembershipComponent } from '../components/renew-membership/renew-membership.component';
import { ReturnhistoryComponent } from '../components/returnhistory/returnhistory.component';
import { ReturnorderComponent } from '../components/returnorder/returnorder.component';
import { ValidityExpiringMembersComponent } from '../components/validity-expiring-members/validity-expiring-members.component';
import { ViewcartComponent } from '../components/viewcart/viewcart.component';


const routes: Routes = [

    {
        path: '',
        component: SalesRelationManagerLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path:'center-list', component: CenterComponent },
            
            { path:'member-kyc', component: MemberKycComponent },
            { path:'member-list', component: MemberComponent },
            { path:'my-profile', component: ProfileComponent },
            { path:'change-password', component: ChangePasswordComponent },
            { path:'member-contacts', component: MemberContactsComponent },
            { path:'product-details', component: ProductDetailComponent },
            { path:'new-order', component: NeworderComponent },
            { path:'view-cart', component: ViewcartComponent },
            { path:'approved-order', component: ApprovedOrderComponent },
            { path:'collections', component: PaymentComponent },
            { path:'returnorder', component: ReturnorderComponent },
            { path:'returnhistory', component: ReturnhistoryComponent },
            { path:'dashboard', component: DashboardComponent },
            { path:'kyc-failed-members', component: KycFailedMembersComponent },
            {path: 'validity-expiring-members', component: ValidityExpiringMembersComponent },
            {path: 'membership', component: MembershipComponent },
            {path: 'membership-history', component: MembershipHistoryComponent },
            {path: 'renew-membership', component: RenewMembershipComponent },
            {path:'dispatched-orders', component: DispatchedOrdersComponent },
            {path:'completed-orders', component: CompletedOrdersComponent },
            {path:'pending-orders', component: ApprovalpendingOrdersComponent },
            {path:'collection-history', component: CollectionHistoryComponent},
            {path:'centerwise-collection',component: CenterwiseCollectionComponent},
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRelationManagerRoutingModule {}
