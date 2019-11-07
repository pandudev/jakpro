import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPurchasingComponent } from './report-purchasing.component';

describe('ReportPurchasingComponent', () => {
  let component: ReportPurchasingComponent;
  let fixture: ComponentFixture<ReportPurchasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPurchasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
