import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from '../shared/trim.pipe';
import { ApprovalpendingOrdersComponent } from './approvalpending-orders/approvalpending-orders.component';
import { ApprovedOrderComponent } from './approved-order/approved-order.component';
import { AssignLeaderComponent } from './assign-leader/assign-leader.component';
import { BranchComponent } from './branch/branch.component';
import { CenterComponent } from './center/center.component';
import { CenterwiseCollectionComponent } from './centerwise-collection/centerwise-collection.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CityComponent } from './city/city.component';
import { CollectionHistoryComponent } from './collection-history/collection-history.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DispatchedOrdersComponent } from './dispatched-orders/dispatched-orders.component';
import { ExpenseTypeComponent } from './expense-type/expense-type.component';
import { GroupComponent } from './group/group.component';
import { InstallmentsComponent } from './installments/installments.component';
import { KycFailedMembersComponent } from './kyc-failed-members/kyc-failed-members.component';
import { KycFailedUsersComponent } from './kyc-failed-users/kyc-failed-users.component';
import { MemberContactsComponent } from './member-contacts/member-contacts.component';
import { MemberKycComponent } from './member-kyc/member-kyc.component';
import { MemberComponent } from './member/member.component';
import { MembershipHistoryComponent } from './membership-history/membership-history.component';
import { MembershipComponent } from './membership/membership.component';
import { NeworderComponent } from './neworder/neworder.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RenewMembershipComponent } from './renew-membership/renew-membership.component';
import { ReturnedOrdersComponent } from './returned-orders/returned-orders.component';
import { ReturnhistoryComponent } from './returnhistory/returnhistory.component';
import { ReturnorderComponent } from './returnorder/returnorder.component';
import { TaxSlotComponent } from './tax-slot/tax-slot.component';
import { UnitComponent } from './unit/unit.component';
import { UserContactsComponent } from './user-contacts/user-contacts.component';
import { UserKycComponent } from './user-kyc/user-kyc.component';
import { UserComponent } from './user/user.component';
import { UserroleComponent } from './userrole/userrole.component';
import { ValidityExpiringMembersComponent } from './validity-expiring-members/validity-expiring-members.component';
import { ViewcartComponent } from './viewcart/viewcart.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,SharedModule,PdfViewerModule
  
  ],
  declarations: [
    ProductCategoryComponent,UnitComponent,TaxSlotComponent,ProductsComponent,
    CityComponent,ExpenseTypeComponent,InstallmentsComponent,ProductBrandComponent,
    BranchComponent,UserComponent,ProductPriceComponent,UserroleComponent,
    CenterComponent,GroupComponent,MemberComponent,ProfileComponent,
    ChangePasswordComponent,UserContactsComponent,MemberContactsComponent,
    ProductDetailComponent,UserKycComponent,MemberKycComponent,
    NeworderComponent,ViewcartComponent,OrderDetailsComponent,ApprovedOrderComponent,
    PaymentComponent,ReturnorderComponent,ReturnedOrdersComponent,
    DashboardComponent,KycFailedMembersComponent,AssignLeaderComponent,
    KycFailedUsersComponent,ValidityExpiringMembersComponent,MembershipComponent,
    MembershipHistoryComponent,RenewMembershipComponent,TruncatePipe, DispatchedOrdersComponent, 
    CompletedOrdersComponent, ApprovalpendingOrdersComponent, CollectionHistoryComponent,
     CenterwiseCollectionComponent, ReturnhistoryComponent
  ]
  
})

export class PagesModule {}
