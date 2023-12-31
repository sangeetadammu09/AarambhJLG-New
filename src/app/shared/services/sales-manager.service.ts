import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_DI_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class SalesManagerService {

  constructor(private http: HttpClient) { }

  //center apis
   getSalesManagerCenterList(smId:any){
    return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.Center.GetSalesManagerCenterList+`?smId=${smId}`)
   }

   //kyc 
   getMemberListForKycVerification(centerId:any){
    return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.Kyc.GetMemberListForKycVerification+`?centerId=${centerId}`)
   }

   getMemberKycDetails(memberId:any){
    return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.Kyc.GetMemberKycDetails+`?memberId=${memberId}`,{observe: 'response'})
   }

 
   addMemberKycVerification(data:any){
     return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.Kyc.AddMemberKycVerification,data,{observe: 'response'})
   }

   getReturnedRequestedList(userId:any,pageno:any,pagesize:any){
    return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.OrderReturn.getReturnedRequestedList+`?userId=${userId}&PageNumber=${pagesize}&PageSize=${pageno}`)
   }

   getReturnOrderDetails(orderId:any){
    return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.OrderReturn.getReturnOrderDetails+`?orderId=${orderId}`,{observe: 'response'})
   }

   approveReturnRequest(data:any){
    return this.http.post<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.OrderReturn.approveReturnRequest,data,{observe: 'response'})
   }

   getDispatchedOrdersListForManager(userId:any, pageSize:any,pageNumber:any){
    return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.Order.GetDispatchedOrdersListForManager
      +`?userId=${userId}&PageSize=${pageSize}&PageNo=${pageNumber}`)
   }


   getCompletedOrdersListForManager(userId:any, pageSize:any,pageNumber:any){
    return this.http.get<any>(APP_DI_CONFIG.parentDomain+APP_DI_CONFIG.endPoints.Order.GetCompletedOrdersListForManager
      +`?userId=${userId}&PageSize=${pageSize}&PageNo=${pageNumber}`)
   }
 

}
