import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared';
import { LoginComponent } from './common/login/login.component';

const routes: Routes = [
    {
        path:'',component:LoginComponent
    },
    //  { path: 'list', component: ListComponent },
    
    {
        path: 'admin',loadChildren: () => import('./admin-layout/admin-layout.module').then((m) => m.AdminLayoutModule),
    },
    { 
        path: 'signup', loadChildren: () => import('./common/signup/signup.module').then((m) => m.SignupModule) },
    {
        path: 'error',loadChildren: () => import('./common/server-error/server-error.module').then((m) => m.ServerErrorModule)
    },
    {
        path: 'access-denied',loadChildren: () => import('./common/access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
    },
    // { 
    //     path: 'not-found', loadChildren: () => import('./common/not-found/not-found.module').then((m) => m.NotFoundModule) },
    // { 
    //     path: '**', redirectTo: 'not-found' 
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
