import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOfficerManagerLayoutComponent } from './sales-officer-manager-layout.component';

describe('SalesOfficerManagerLayoutComponent', () => {
  let component: SalesOfficerManagerLayoutComponent;
  let fixture: ComponentFixture<SalesOfficerManagerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOfficerManagerLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOfficerManagerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
