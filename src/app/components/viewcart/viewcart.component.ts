import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../../app/common/utils/data.service';
import { AdminService } from '../../../app/shared/services/admin.service';
import { SalesrelationService } from '../../../app/shared/services/salesrelation.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  newCart:any 
  cartDetailsObj :any={};
  viewCartList :any = [];
  productObj:any ={};
  page =1;
  demoText="demo"
  cartList: any = [];
  @ViewChild('closeDeleteItemBtn') closeDeleteItemBtn:any;
  @ViewChild('closeMemberValidityBtn') closeMemberValidityBtn:any;
  @ViewChild('openModal') openModal :any;
  cartItemId: any;
  serviceCharge: any =0;
  paymentInstallment :any;
  installmentList :any =[];
  updatedCartId: any;
  paymentInstallmentId: any;
  rowValue: any;
  selectedCartId :any
  memberId :any
  itemId: any;
  isMemberValidityExpired :boolean = false;
  notEligibleTxt: any;
  serviceChargeErr = '';
  paymentInstallmentErr = '';

  constructor(private _adminService:AdminService, private _salesService: SalesrelationService,
    private toastrService :ToastrService,private router: Router, private dataService:DataService) {

    }

  ngOnInit(): void {
    
    this.getAllInstallments();
    this.paymentInstallment = "";
    this.dataService.currentCatObj.subscribe((data:any) => {
     // console.log(data);
      this.newCart = data;
      this.showViewCartModal();
    })

  }

  showViewCartModal(){
    if(this.newCart != null){
   //   //console.log(this.newCart,'new cart')
      this._salesService.getShoppingCart(this.newCart).subscribe((data:any) => {
        if(data){
         // debugger;
          this.cartDetailsObj = data;
          this.viewCartList = data.cartItems;
          this.cartDetailsObj.total = 0;
          this.cartDetailsObj.finalAmount = 0;
          this.updatedCartId = this.cartDetailsObj.cartId;
          this.viewCartList.forEach((item:any,index:number) => {
            this.cartDetailsObj.total += item['subTotal'];
            item['rowEdited'] = false;
          }) 
        
         
         }
       })
    }

    // this.dataService.currentCatObj.subscribe((data:any) => {
    //     //console.log(data,'dataaaaaaaaaaaaaaaaaa');
    //       if(data){
    //      this.selectedCartId = data.cartId;
    //      this.memberId = data.memberId;
    //      //console.log(this.memberId,this.selectedCartId)
        
     
    //       }
    //    })   

  }

  editRow(item:any){
    item.rowEdited = !item.rowEdited;
    item.prodQuantityInput = item.qty
  }

  updateItemQuantity(item:any){
          this.updatedCartId = item.cartId;
          var updateCart :any = {};
          updateCart.cartId = item.cartId,
          updateCart.itemId = item.itemId,
          updateCart.itemName = item.itemName == null ? '' : item.itemName,
         updateCart.qty = JSON.parse(item.prodQuantityInput),
          updateCart.salePrice = item.salePrice,
          updateCart.mrp = item.mrp,
          updateCart.subTotal = updateCart.salePrice * updateCart.qty,
          updateCart.itemUrl = item.productPhoto
          this._salesService.addItemToCart(updateCart).subscribe((data:any) => {
            if(data.status == 200){
              this.toastrService.success('Item Quantity updated successfully')

              this.showViewCartModal()

             }else{
               this.toastrService.error('No Items added. Please try again')
             } 
           })
         
  }

  addServiceCharge(value:any){
      this.serviceCharge = JSON.parse(value);
      this.cartDetailsObj.finalAmount = 0;
      this.cartDetailsObj.finalAmount +=  this.cartDetailsObj.total + this.serviceCharge
  }

  showdeleteCartModal(item:any){
    //console.log(item)
    this.cartItemId = item.cartId;
    this.itemId = item.itemId;
    
 }

  deleteItem(){
    this._salesService.removeItemFromCart(this.cartItemId,this.itemId).subscribe((data:any) => {
      if(data.status == 200){
        this.toastrService.success('Item deleted successfully!');
        this.showViewCartModal();
        this.closeDeleteItemBtn.nativeElement.click();
      }
    })
  }

  getAllInstallments(){
    this._adminService.getAllInstallment().subscribe((data) => {
   //   //console.log(data,'all Installments')
     if(data.length > 0){
    //  this.productsFound = true;
       this.installmentList = data;
      }else{
        this.installmentList = [];
       // this.productsFound = false;
      }
      
    })
  }


  cancelOrder(){
    this._salesService.cancelOrder(this.selectedCartId).subscribe((data) => {
     if(data.status == 200){
      this.router.navigate(['/sales-relation-officer/new-order']);
      localStorage.removeItem(this.memberId);
      localStorage.removeItem(this.selectedCartId);
      this.toastrService.success('Order cancelled successfully')

      }else{
        this.toastrService.success('Error cancelling the order')
      }
      
    })
  }

  getInstallmentDetails(item:any){
      this.paymentInstallmentId = item;
      this.paymentInstallmentErr = '';
  }

  closeMemberValidityModal(){
    this.closeMemberValidityBtn.nativeElement.click();
    this.isMemberValidityExpired = false;
  }

  placeOrder(){
    //console.log(this.cartDetailsObj)
    //console.log(this.newCart,'new cart')
    this._salesService.getOrderMemberValidity(this.cartDetailsObj.memberId).subscribe((data:any) => {
     //console.log(data.body)
      if(data.status == 200 && data.body.isEligible){
        this.isMemberValidityExpired = false;  
        var newOrder :any = {};
        newOrder.cartId = this.updatedCartId,
        newOrder.totalBill = this.cartDetailsObj.total
        if(this.serviceCharge == 0){
           this.serviceChargeErr="Service Charge is required"
        }else  if(this.paymentInstallmentId == undefined){
          this.serviceChargeErr= '';
          this.paymentInstallmentErr = "Payment Installment is required"
        }else{
        this.serviceChargeErr= '';
        this.paymentInstallmentErr = '',
        newOrder.serviceCharges = this.serviceCharge,
        newOrder.totalBillWithServiceCharges = this.cartDetailsObj.finalAmount,
        newOrder.requestedInstallmentId = this.paymentInstallmentId
        this._salesService.placeNewOrder(newOrder).subscribe((data:any) => {
        if(data.status == 200){
        this.toastrService.success('Order placed successfully')
        this.router.navigate(['/sales-relation-officer/new-order']);
        localStorage.removeItem(this.memberId);
        localStorage.removeItem(this.selectedCartId);
        this.showViewCartModal()

        }else{
          this.toastrService.error('Error placing the order. Please try again')
        } 
      })
    }
    } 
    else
    {
      //  document.getElementById("openModalButton")?.click();
      this.openModal.nativeElement.click();
      this.isMemberValidityExpired = true;
      
      let reasons = '';
      
      data.body.failuresReasons.forEach((msg: string) => {
        reasons += msg + '\n';
      });
     this.notEligibleTxt = reasons;
    }
  },(error:HttpErrorResponse) => {
   
  })
  }

  showGoToCartModal(){
    
    if(this.newCart != null){
          this.dataService.sendOldCartData(this.cartDetailsObj)
          this.router.navigate(['/sales-relation-officer/new-order']) 
    } 
  }


}
