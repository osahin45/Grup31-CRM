import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { LoginGuard } from './login/login.guard';
import { AccountService } from './services/account.service';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { CustomerOrdersComponent } from './customer/customer-orders/customer-orders.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    LoginComponent,
    ProductAddComponent,
    CustomerAddComponent,
    RegisterComponent,
    OrderComponent,
    CustomerOrdersComponent,
    EditProductComponent,
    ProductFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
