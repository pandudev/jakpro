import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenOrderListComponent } from './kitchen-order-list.component';

describe('KitchenOrderListComponent', () => {
  let component: KitchenOrderListComponent;
  let fixture: ComponentFixture<KitchenOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
