import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignLeaderComponent } from '../components/assign-leader/assign-leader.component';
import { BranchComponent } from '../components/branch/branch.component';
import { CenterComponent } from '../components/center/center.component';
import { CenterwiseCollectionComponent } from '../components/centerwise-collection/centerwise-collection.component';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';
import { CityComponent } from '../components/city/city.component';
import { CollectionHistoryComponent } from '../components/collection-history/collection-history.component';
import { CompletedOrdersComponent } from '../components/completed-orders/completed-orders.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DispatchedOrdersComponent } from '../components/dispatched-orders/dispatched-orders.component';
import { ExpenseTypeComponent } from '../components/expense-type/expense-type.component';
import { GroupComponent } from '../components/group/group.component';
import { InstallmentsComponent } from '../components/installments/installments.component';
import { KycFailedUsersComponent } from '../components/kyc-failed-users/kyc-failed-users.component';
import { MemberContactsComponent } from '../components/member-contacts/member-contacts.component';
import { MemberComponent } from '../components/member/member.component';
import { ProductBrandComponent } from '../components/product-brand/product-brand.component';
import { ProductCategoryComponent } from '../components/product-category/product-category.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductPriceComponent } from '../components/product-price/product-price.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { TaxSlotComponent } from '../components/tax-slot/tax-slot.component';
import { UnitComponent } from '../components/unit/unit.component';
import { UserContactsComponent } from '../components/user-contacts/user-contacts.component';
import { UserKycComponent } from '../components/user-kyc/user-kyc.component';
import { UserComponent } from '../components/user/user.component';
import { UserroleComponent } from '../components/userrole/userrole.component';
import { SalesOfficerManagerLayoutComponent } from './sales-officer-manager-layout.component';


const routes: Routes = [

    {
        path: '',
        component: SalesOfficerManagerLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path:'product-category', component: ProductCategoryComponent },
            { path:'product-brand', component: ProductBrandComponent },
            { path:'product-price', component: ProductPriceComponent },
            { path:'product-details', component: ProductDetailComponent },
            { path:'unit', component: UnitComponent },
            { path:'user-list', component: UserComponent },
            { path:'user-kyc', component: UserKycComponent },
            { path:'center-list', component: CenterComponent },
            { path:'member-list', component: MemberComponent },
            { path:'group-list', component: GroupComponent },
            { path:'user-role', component: UserroleComponent },
            { path:'tax-slot', component: TaxSlotComponent },
            { path:'product-list', component: ProductsComponent },
            { path:'city', component: CityComponent },
            { path:'branch', component: BranchComponent },
            { path:'expense-type', component: ExpenseTypeComponent },
            { path:'installments', component: InstallmentsComponent },
            { path:'change-password', component: ChangePasswordComponent },
            { path:'user-contacts', component: UserContactsComponent },
            { path:'member-contacts', component: MemberContactsComponent },
            { path:'my-profile', component: ProfileComponent },
            { path:'dashboard', component: DashboardComponent },
            { path:'assign-leader', component:AssignLeaderComponent },
            { path:'kyc-failed-users', component: KycFailedUsersComponent },
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
