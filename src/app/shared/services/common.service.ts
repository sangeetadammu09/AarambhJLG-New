import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_DI_CONFIG } from '../app.config';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

//  url = 'https://jlg.examfirst.in/api/User/Login';

  constructor(private http: HttpClient) {}

  login(data:any){
    return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.Login,data)
   }
 
   logout(data:any){
     return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.Logout,data)
    }
 
   refreshToken(data:any){
     return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.RefreshToken,data,{observe: 'response'})
   }
 
   getUserProfilePicture(userId: any){
     return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.GetUserProfilePic+`?userId=${userId}`,{observe: 'response'})
    }

  
}
