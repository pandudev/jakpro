import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ToastrModule } from 'ngx-toastr';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KitchenStockComponent } from './components/kitchen-stock/kitchen-stock.component';
import { OrderComponent } from './components/order/order.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { KitchenOrderListComponent } from './components/kitchen-order-list/kitchen-order-list.component';
import { CashInComponent } from './components/cash-in/cash-in.component';
import { ProductComponent } from './components/product/product.component';
import { KitchenStockFormComponent } from './components/kitchen-stock-form/kitchen-stock-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductRawFormComponent } from './components/product-raw-form/product-raw-form.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { ZoneComponent } from './components/zone/zone.component';
import { ZoneFormComponent } from './components/zone-form/zone-form.component';
import { TableFormComponent } from './components/table-form/table-form.component';
import { TableComponent } from './components/table/table.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';
import { InventoryTransactionFormComponent } from './components/inventory-transaction-form/inventory-transaction-form.component';
import { StockRequestComponent } from './components/stock-request/stock-request.component';
import { ReportPurchasingComponent } from './components/report-purchasing/report-purchasing.component';
import { ReportSaleComponent } from './components/report-sale/report-sale.component';
import { ReportStockComponent } from './components/report-stock/report-stock.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    KitchenStockComponent,
    OrderComponent,
    OrderListComponent,
    KitchenOrderListComponent,
    CashInComponent,
    ProductComponent,
    KitchenStockFormComponent,
    ProductFormComponent,
    ProductRawFormComponent,
    InventoryComponent,
    InventoryFormComponent,
    ZoneComponent,
    ZoneFormComponent,
    TableFormComponent,
    TableComponent,
    UserFormComponent,
    UserComponent,
    InventoryTransactionFormComponent,
    StockRequestComponent,
    ReportPurchasingComponent,
    ReportSaleComponent,
    ReportStockComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
