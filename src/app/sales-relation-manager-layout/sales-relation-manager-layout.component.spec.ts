import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRelationManagerLayoutComponent } from './sales-relation-manager-layout.component';

describe('SalesRelationManagerLayoutComponent', () => {
  let component: SalesRelationManagerLayoutComponent;
  let fixture: ComponentFixture<SalesRelationManagerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesRelationManagerLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesRelationManagerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
