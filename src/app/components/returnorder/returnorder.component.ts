import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { SalesrelationService } from '../../../app/shared/services/salesrelation.service';

@Component({
  selector: 'app-returnorder',
  templateUrl: './returnorder.component.html',
  styleUrls: ['./returnorder.component.css']
})
export class ReturnorderComponent implements OnInit {

  approvedOrderDetailsObj: any = {};
  selectedOrderList: any = [];
  orderinstallmentList: any = []
  searchOrder: any;
  orderId: any;
  orderFound = false;
  cartItemId: any;
  itemId: any;
  _salesService: any;
  page = 1;
  @ViewChild('closeDeleteItemBtn') closeDeleteItemBtn: any;
  @ViewChild('closeSubmitBtn') closeSubmitBtn: any;
  updatedCartId: any;
  selectedReturnOrder: any;
  returnedOrderList: any = [];
  userId = localStorage.getItem('userId');
  userRole = localStorage.getItem('roles');
  tempOrderArr: string[] = [];
  isIncreaseAmountError: any = false;
  pageLoaded: boolean = false;
  returnError : string = '';
  canSubmitReturn : boolean = false;


  constructor(private _saleService: SalesrelationService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    if (this.userRole)
      var temp = JSON.parse(this.userRole);
    const finalArray = temp.map((item: any, index: number) => ({ id: index, name: item }))
    this.userRole = finalArray[0].name;
    // //console.log(this.userRole);
  }

  getSearchedOrder(searchOrder: any) {
    this.orderId = searchOrder;
    if (this.orderId) {
      this._saleService.getApprovedOrdersDetails(this.orderId).subscribe((data: any) => {
        if (data.status == 200) {
          this.orderFound = true;
          this.approvedOrderDetailsObj = data.body;
          if (this.approvedOrderDetailsObj.isOrderDispatched && !this.approvedOrderDetailsObj.isOrderCompleted && !this.approvedOrderDetailsObj.isReturnRequested) {
            this.orderFound = true;
            this.selectedOrderList = data.body.orderItems;
            this.selectedOrderList.forEach((item: any, index: number) => {
              item['rowEdited'] = false;
              item.returnQty = 0;
              item.totalReturnAmt = 0;
            })
            this.orderinstallmentList = data.body.installments;
            this.orderinstallmentList.forEach((item: any) => {
              item.installmentDate = moment(item.installmentDate).format("L");
            })
          }
          else
          {
            this.orderFound = false;
            this.selectedOrderList = []
            if(!this.approvedOrderDetailsObj.isOrderDispatched)
            {
              this.returnError +='Order is not dispatched. Return not allowed.</br>';
            }
            if(this.approvedOrderDetailsObj.isOrderCompleted)
            {
              this.returnError +='Order is completed. Return not allowed.</br>';
            }
            if(this.approvedOrderDetailsObj.isReturnRequested)
            {
              this.returnError +='Return request already sent. Return not allowed.</br>';
            }
            this.approvedOrderDetailsObj = null;
          }
          // this.getOrderReturnedItems()
        } else {
          this.orderFound = false;
          this.selectedOrderList = []
        }
      }, (error: HttpErrorResponse) => {
        if (error.status == 500) {
          this.orderFound = false;
          this.selectedOrderList = [];
        }
      })
    }
  }

  getOrderReturnedItems() {
    this._saleService.getOrderReturnedItems(this.orderId).subscribe((data: any) => {
      //  console.log(data)
      if (data.status == 200) {
        this.orderFound = true;
        this.returnedOrderList = data.body;
        this.pageLoaded = true;
      } else {
        this.orderFound = false;
        this.returnedOrderList = [];
        this.pageLoaded = true;
      }
    })
  }

  editRow(item: any) {
    //console.log(item.qty)
    // item.prodQuantityInput = item.qty
    item.rowEdited = !item.rowEdited;
  }

  validate(item: any) {
    if (JSON.parse(item.returnQty) > item.qty || item.returnQty < 0) {
      item.returnQty = 0;
    } else {
      this.canSubmitReturn = this.canReturn();
      item.totalReturnAmt = item.returnQty * item.salePrice;
    }
  }

  canReturn():boolean{
   let returnSum : number = 0;
   this.selectedOrderList.forEach((item : any)=> {
      returnSum +=  item.returnQty 
   });
   
  let result = returnSum > 0;
  return result;
  }

  updateItemQuantity(item: any) {

    if (JSON.parse(item.prodQuantityInput) > item.qty) {
      this.isIncreaseAmountError = true;
    } else {
      this.isIncreaseAmountError = false;
      this.selectedReturnOrder = item;
      var updateCart: any = {};
      updateCart.orderId = item.orderId,
        updateCart.productId = item.productId,
        item.prodQuantityInput != "" ? updateCart.qty = JSON.parse(item.prodQuantityInput) : null
      updateCart.salePrice = item.salePrice,
        updateCart.taxAmt = item.taxAmt ? item.taxAmt : 0,
        updateCart.totalAmt = updateCart.qty * updateCart.salePrice;
      updateCart.saleprice = item.salePrice,
        updateCart.productName = item.productName,

        this.tempOrderArr.push(updateCart)
        
      this.returnedOrderList = this.tempOrderArr; 
      console.log(this.returnedOrderList, 'returnedOrderList')
    }

  }

  showdeleteCartModal(item: any) {
    this.selectedReturnOrder = item;

  }

  deleteItem() {
    var updateCart: any = {};
    updateCart.orderId = this.selectedReturnOrder.orderId,
      updateCart.productId = this.selectedReturnOrder.productId,
      updateCart.qty = 0,
      updateCart.salePrice = this.selectedReturnOrder.salePrice,
      updateCart.taxAmt = this.selectedReturnOrder.taxAmt ? this.selectedReturnOrder.taxAmt : 0,
      updateCart.totalAmt = this.selectedReturnOrder.totalAmt
    //console.log(updateCart);
    this._saleService.addOrderReturnItems(updateCart).subscribe((data: any) => {
      //console.log(data.status)
      if (data.status == 200) {
        this.toastrService.success('Item deleted successfully')
        this.closeDeleteItemBtn.nativeElement.click();
        this.getSearchedOrder(this.selectedReturnOrder.orderId)

      } else {
        this.toastrService.error('No Items deleted. Please try again')
      }
    })

  }


  submitReturnRequest() {
    this.closeSubmitBtn.nativeElement.click();
    let returnedItemsCount = 0;
    this.selectedOrderList.forEach((item: any) => {
      if (item.returnQty)
        returnedItemsCount = returnedItemsCount + item.returnQty;
    });
    if (returnedItemsCount == 0) {
      this.toastrService.error("Please enter the return items");
    } else {
      var returnedItems: any[] = [];
      this.selectedOrderList.forEach((item: any) => {
        if (item.returnQty > 0) {
          item.qty = item.returnQty;
          returnedItems.push(item);
        }
      });

      var selectedReturnOrder: any = this.approvedOrderDetailsObj;

      // if(this.userRole)
      // var temp = JSON.parse(this.userRole);
      // const finalArray = temp.map((item:any, index:number) => ({ id: index,name: item }))
      // this.userRole = finalArray[0].name;
      var submitOrder: any = {};
      submitOrder.orderId = selectedReturnOrder.orderId,
        submitOrder.cityId = selectedReturnOrder.cityId,
        submitOrder.centerId = selectedReturnOrder.centerId,
        submitOrder.memberId = selectedReturnOrder.memberId,
        submitOrder.branchId = selectedReturnOrder.branchId,
        submitOrder.returnRequestedById = this.userId ? JSON.parse(this.userId) : null,
        submitOrder.returnRequestedRole = this.userRole,
        submitOrder.totalActualBillAmt = selectedReturnOrder.orderItems[0].totalAmt
      //this.returnedOrderList.forEach((returnOrder:any) => { delete returnOrder.salePrice , delete returnOrder.productName})

      // submitOrder.items = this.returnedOrderList
      //console.log(submitOrder);
      submitOrder.items = returnedItems;

      this._saleService.submitReturnRequest(submitOrder).subscribe((data: any) => {
        //console.log(data.status)
        if (data.status == 200) {
          this.toastrService.success('Order return submitted successfully')
          this.getSearchedOrder(selectedReturnOrder.orderId)

        }
        else {
          this.toastrService.error('No Items deleted. Please try again')
        }
      })
    }
  }

  cancelReturnRequest() {
    this.closeSubmitBtn.nativeElement.click();
    this.getSearchedOrder(this.approvedOrderDetailsObj.orderId)
  }
}
