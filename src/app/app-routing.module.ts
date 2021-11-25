import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CartshoppingComponent } from './cartshopping/cartshopping.component';
import { MesseageComponent } from './messeage/messeage.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'cartshopping', component: CartshoppingComponent },
  { path: '', component: HomeComponent },
  { path: 'messeage', component: MesseageComponent },
  { path: 'notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
