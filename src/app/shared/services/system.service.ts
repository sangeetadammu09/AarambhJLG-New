import { Injectable } from '@angular/core';
import { APP_DI_CONFIG } from '../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.GetUsers)

  }
  addUser(user:any){
    return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.AddUsers,user,{observe:'response'})

  }
  updateUser(user:any){
    return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.UpdateUsers,user,{observe:'response'})
  }

//  getUserByUserId(Id:any){
//     return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.RentalVerification.getUserId+`?userId=${Id}`)
//   }

deleteUser(userId:any){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.delete<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.DeleteUsers,{headers,body:userId, observe:'response'})
}

getAllRoles(){
  return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.GetRoles)
}

addRole(role:any){
  return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.AddRole,role,{observe:'response'})
}

addUserRole(role:any){
  return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.AddUserRole,role,{observe:'response'})

}
deleteUserRole(webUserRoleId:any){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.delete<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.DeleteWebUserRole,{headers,body:webUserRoleId,observe:'response'})
}

getAllUserBYRoleID(id:any){
  return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.User.GetWebUserRoles+`?roleId=${id}`)
}

deleteRole(roleId:any){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.delete<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.Role.DeleteWebRole,{headers,body:roleId,observe:'response'})
}

getMenus(){
  return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.RoleMenu.GetMenus)
}

getRoles(){
  return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.RoleMenu.GetRoles)
}

getRoleMenus(){
  return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.RoleMenu.GetWebRoleMenu)
}

addRoleMenu(data:any){
  return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.RoleMenu.AddWebRoleMenu,data,{observe:'response'})
}

updateRoleMenu(data:any){
  return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.RoleMenu.EditWebRoleMenu,data,{observe:'response'})
}

deleteRoleMenu(data:any){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.delete<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.RoleMenu.DeleteWebRoleMenu,{headers,body:data,observe:'response'})
}





}
