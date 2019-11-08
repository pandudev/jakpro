import { ReportStockComponent } from './components/report-stock/report-stock.component';

import { ReportSaleComponent } from './components/report-sale/report-sale.component';
import { StockRequestComponent } from './components/stock-request/stock-request.component';
import { InventoryTransactionFormComponent } from './components/inventory-transaction-form/inventory-transaction-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TableFormComponent } from './components/table-form/table-form.component';
import { TableComponent } from './components/table/table.component';
import { ZoneFormComponent } from './components/zone-form/zone-form.component';
import { ZoneComponent } from './components/zone/zone.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ProductRawFormComponent } from './components/product-raw-form/product-raw-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { KitchenStockFormComponent } from './components/kitchen-stock-form/kitchen-stock-form.component';
import { ProductComponent } from './components/product/product.component';
import { CashInComponent } from './components/cash-in/cash-in.component';
import { KitchenStockComponent } from './components/kitchen-stock/kitchen-stock.component';
import { KitchenOrderListComponent } from './components/kitchen-order-list/kitchen-order-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserComponent } from './components/user/user.component';
import { ReportPurchasingComponent } from './components/report-purchasing/report-purchasing.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: '404',
  //   component: P404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: P500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'order',
        component: OrderComponent,
        data: {
          title: 'Order'
        }
      },
      {
        path: 'order-list',
        component: OrderListComponent,
        data: {
          title: 'Order List'
        }
      },
      {
        path: 'kitchen-order-list',
        component: KitchenOrderListComponent,
        data: {
          title: 'Kitchen Order List'
        }
      },
      {
        path: 'kitchen-stock',
        component: KitchenStockComponent,
        data: {
          title: 'Kitchen Stock'
        }
      },
      {
        path: 'kitchen-stock-form',
        component: KitchenStockFormComponent,
        data: {
          title: 'Kitchen Stock Form'
        }
      },
      {
        path: 'cash-in',
        component: CashInComponent,
        data: {
          title: 'Cash In'
        }
      },
      {
        path: 'product',
        component: ProductComponent,
        data: {
          title: 'Product'
        }
      },
      {
        path: 'product-form',
        component: ProductFormComponent,
        data: {
          title: 'Product Form'
        }
      },
      {
        path: 'product-raw-form',
        component: ProductRawFormComponent,
        data: {
          title: 'Product RAW Form'
        }
      },
      {
        path: 'inventory',
        component: InventoryComponent,
        data: {
          title: 'Inventory Stock'
        }
      },
      {
        path: 'inventory-form',
        component: InventoryFormComponent,
        data: {
          title: 'Inventory Stock Form'
        }
      },
      {
        path: 'inventory-transaction-form',
        component: InventoryTransactionFormComponent,
        data: {
          title: 'Inventory Transaction Form'
        }
      },
      {
        path: 'stock-request',
        component: StockRequestComponent,
        data: {
          title: 'Stock Request'
        }
      },
      {
        path: 'zone',
        component: ZoneComponent,
        data: {
          title: 'Zone'
        }
      },
      {
        path: 'zone-form',
        component: ZoneFormComponent,
        data: {
          title: 'Zone Form'
        }
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'Table'
        }
      },
      {
        path: 'table-form',
        component: TableFormComponent,
        data: {
          title: 'Table Form'
        }
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: 'User'
        }
      },
      {
        path: 'user-form',
        component: UserFormComponent,
        data: {
          title: 'User Form'
        }
      },
      {
        path: 'report-sale',
        component: ReportSaleComponent,
        data: {
          title: 'Sale Report'
        }
      },
      {
        path: 'report-purchasing',
        component: ReportPurchasingComponent,
        data: {
          title: 'Purchasing Report'
        }
      },
      {
        path: 'report-stock',
        component: ReportStockComponent,
        data: {
          title: 'Stock Report'
        }
      }
      // {
      //   path: 'base',
      //   loadChildren: () =>
      //     import('./views/base/base.module').then((m) => m.BaseModule)
      // },
      // {
      //   path: 'buttons',
      //   loadChildren: () =>
      //     import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () =>
      //     import('./views/chartjs/chartjs.module').then((m) => m.ChartJSModule)
      // },
      // {
      //   path: 'dashboard',
      //   loadChildren: () =>
      //     import('./views/dashboard/dashboard.module').then(
      //       (m) => m.DashboardModule
      //     )
      // },
      // {
      //   path: 'icons',
      //   loadChildren: () =>
      //     import('./views/icons/icons.module').then((m) => m.IconsModule)
      // },
      // {
      //   path: 'notifications',
      //   loadChildren: () =>
      //     import('./views/notifications/notifications.module').then(
      //       (m) => m.NotificationsModule
      //     )
      // },
      // {
      //   path: 'theme',
      //   loadChildren: () =>
      //     import('./views/theme/theme.module').then((m) => m.ThemeModule)
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: () =>
      //     import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      // }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
