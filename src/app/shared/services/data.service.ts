import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userData:any;
  menuData:any;
  constructor() { }
  exportData: any = {};

  private data = new BehaviorSubject(null);
  oldData = this.data.asObservable();

  sendData(userObj: any) {
    this.data.next(userObj);
  }

  private cartSource = new BehaviorSubject(null);
  currentCatObj = this.cartSource.asObservable();

  sendMemberIdAndCartId(cartObj: any) {
    this.cartSource.next(cartObj);
  }

  private cartData = new BehaviorSubject(null);
  oldCartData = this.cartData.asObservable();

  sendOldCartData(cartObj: any) {
    this.cartData.next(cartObj);
  }

  
  sendUser(user:any)
  {
    this.userData=user;
  }

  getUser()
  {
    return this.userData;
  }

  public exportToExcel(params:any) {
    var data = (params.data) ? params.data : this.exportData;
    var filename = (params.filename) ? params.filename : 'data.xlsx';
    var filetype = (params.filetype) ? params.filetype : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    var columnWidth = (params.columnWidth) ? params.columnWidth : 25; // Set the default column width (in characters)

    var worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    // Set the column width for the first column
    var columnWidths = [columnWidth];

    // Loop through the remaining columns of the first row of the worksheet to get the number of columns
    let columnCount = 1;
    Object.keys(worksheet).forEach((cell) => {
      if (cell[0] === 'A' && cell.length > 1) { // We assume that the first row of the worksheet contains the column headers
        const columnIndex = parseInt(cell.substring(1));
        if (columnIndex > columnCount) {
          columnCount = columnIndex;
        }
      }
    });

    // Set the column widths in the worksheet's !cols property
    for (let i = 1; i <= columnCount; i++) {
      columnWidths[i] = columnWidth;
    }
    worksheet['!cols'] = columnWidths.map((width) => ({ width }));
    var workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    var excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    var blob: Blob = new Blob([excelBuffer], { type: filetype });
    saveAs(blob, filename);
  }

  sendMenus(menu:any)
  {
    this.menuData=menu;
  }

  getMenus()
  {
    return this.menuData;
  }
}
