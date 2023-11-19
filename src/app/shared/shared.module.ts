import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { NgxPrintElementModule } from 'ngx-print-element';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,DialogModule,ButtonModule,PanelMenuModule,
    DropdownModule,TableModule,FormsModule,ReactiveFormsModule,
    AccordionModule,CalendarModule,
    SliderModule,MultiSelectModule,ContextMenuModule,
    ToastModule,TooltipModule,InputTextModule,
    ProgressBarModule,HttpClientModule,
    ProgressSpinnerModule,NgxPrintElementModule
  ],
  exports: [
    CommonModule, DialogModule, ButtonModule,PanelMenuModule, DropdownModule,TableModule,
    FormsModule,ReactiveFormsModule,AccordionModule,CalendarModule,
    SliderModule,MultiSelectModule,ContextMenuModule,
    ToastModule,TooltipModule,InputTextModule,
    ProgressBarModule,HttpClientModule,
    ProgressSpinnerModule,NgxPrintElementModule
  ]
})
export class SharedModule { }
