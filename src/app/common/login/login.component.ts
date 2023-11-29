import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { CommonService } from '../../shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../../../app/shared/services/master.service';
import { decodeToken } from '../utils/token';
import { ErrorHandleService } from '../../../app/shared/services/error-handle.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted :boolean = false;
  decodedToken!:any;
  loginText = "Login"
  loggedInBoolean: boolean = false;
  @ViewChild('mypassword') mypassword:any;

 constructor( private _router: Router, private _fb: FormBuilder,private _toastrService: ToastrService, 
   private _commonService: CommonService, private masterService: MasterService, private errorHandlerService: ErrorHandleService) { 
    this.loginForm = this._fb.group({
       username : ['', Validators.required],
       password : ['', Validators.required]
    })
 }


 ngOnInit(): void {}

 get f() {return this.loginForm.controls;}

 login(){
   this.submitted = true;
   if(this.loginForm.valid){
   //  console.log(this.loginForm.value)
     localStorage.clear();
     var loginFormData = new FormData();
     loginFormData.append('username', this.loginForm.controls['username'].value);
     loginFormData.append('password', this.loginForm.controls['password'].value);
     this.loginText = "Please Wait! Logging In";
     this._commonService.login(loginFormData).subscribe((data:any) => { 
       if(data){
      
         this.decodedToken = decodeToken(data.access_token);
         this.loginText = "Login";
         const userData :any = {}
         userData.fullname = this.decodedToken.FullName;
         userData.userCity = this.decodedToken.CityId;
         userData.userId = this.decodedToken.UserId;
         userData.roles = this.decodedToken.role;

         this.masterService.saveToken(data.access_token);
         this.masterService.saveRefreshToken(data.refreshToken);
         //this.masterService.saveUser(data);

        localStorage.setItem('userToken', data.access_token);  
        localStorage.setItem('refreshToken', data.refreshToken);        
        localStorage.setItem('fullname', this.decodedToken.FullName);
        localStorage.setItem('userCity', this.decodedToken.CityId);
        localStorage.setItem('userId', this.decodedToken.UserId);
        localStorage.setItem('roles',this.decodedToken.role);
        
         this._toastrService.success('Logged in successfully!');
         var roleList :any= JSON.parse(userData.roles);
         roleList.forEach((role:any) =>{
           (role == "SuperAdmin") ? (this._router.navigate(['/super-admin/dashboard']), localStorage.setItem('roleNo',"104")):
           (role == "Admin") ? (this._router.navigate(['/admin/dashboard']), localStorage.setItem('roleNo',"101")):
          (role == "RelationOfficer" || role == "SalesOfficer") ? (this._router.navigate(['/sales-relation-officer/dashboard']),localStorage.setItem('roleNo',"102")):
          (role == "SalesManager") ? (this._router.navigate(['/sales-manager-officer/dashboard']),localStorage.setItem('roleNo',"103")): null;
         })
       }(err:any) =>{
        console.log(err)
       }},(error:any)=>{
          //this._toastrService.error()
          let temp = this.errorHandlerService.handleError(error);
          console.log(temp)
       }
     )
      
   }else{
     console.log('invalid login')
   }
 }

 showpassword() {
   var passwordType = this.mypassword.nativeElement.type;
   if (passwordType == "password") {
     this.mypassword.nativeElement.type = "text";
   } else {
     this.mypassword.nativeElement.type = "password";
   }
 }

}

