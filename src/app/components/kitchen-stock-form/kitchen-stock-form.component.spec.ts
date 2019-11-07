import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenStockFormComponent } from './kitchen-stock-form.component';

describe('KitchenStockFormComponent', () => {
  let component: KitchenStockFormComponent;
  let fixture: ComponentFixture<KitchenStockFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenStockFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenStockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
