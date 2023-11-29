import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MasterService } from '../../../../app/shared/services/master.service';
import { AdminService } from '../../../../app/shared/services/admin.service';
import { CommonService } from '../../../../app/shared/services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-srm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    userName = localStorage.getItem('fullname');
    userRoles = localStorage.getItem('roles');
    cityId = localStorage.getItem('userCity');
    userCity :any
    userId = localStorage.getItem('userId');
    public isCollapsed = true;
    @ViewChild("navbar-cmp", {static: false}) button:any;
    userPhoto: any;

    constructor(private adminService : AdminService,private router: Router, private _commonService: CommonService, 
        private masterService: MasterService) {
  


        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }


ngOnInit() {
        this.pushRightClass = 'push-right';
        this.getUserPic()

       if(this.userRoles){
         var temp = JSON.parse(this.userRoles);
         const finalArray = temp.map((item:any, index:number) => ({ id: index,name: item }))
         this.userRoles = finalArray;
       }
       this.adminService.getCityById(this.cityId).subscribe((data:any) => {
         this.userCity = data.cityName
       })
    }

    name = localStorage.getItem('name');

    getUserPic(){
      if(this.userId)
      this.userId = JSON.parse(this.userId)
      this._commonService.getUserProfilePicture(this.userId).subscribe((user:any) => {
          if(user){
            this.userPhoto =  user.body.photoUrl;
          }
      }, (err:HttpErrorResponse)=>{
        if(err.status == 0){
          this.userPhoto = '../../../../assets/images/user.png'
    }
      })
     
    }

    logout(){
        const token :any= this.masterService.getToken();
        const refreshToken:any = this.masterService.getRefreshToken();
        var logoutTokenObj = new FormData();
        logoutTokenObj.append('accessToken',token);
        logoutTokenObj.append('refreshToken',refreshToken);
  
         this._commonService.logout(logoutTokenObj).subscribe((result:any) => {
      
          localStorage.clear();
          this.router.navigate(['/'])
         })
      }
      
      myProfile(){
        this.router.navigate(['/sales-relation-officer/my-profile'])
      }

      changePassword(){
        this.router.navigate(['/sales-relation-officer/change-password'])
      }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.masterService.isLoggedOut();
    }


}
