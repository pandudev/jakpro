import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRawFormComponent } from './product-raw-form.component';

describe('ProductRawFormComponent', () => {
  let component: ProductRawFormComponent;
  let fixture: ComponentFixture<ProductRawFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRawFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRawFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
