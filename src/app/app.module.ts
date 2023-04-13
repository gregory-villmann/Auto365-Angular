import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { ListingsPageComponent } from './listings-page/listings-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {ListingPageComponent} from './listing-page/listing-page.component';
import {AddEditListingPageComponent} from './add-edit-listing-page/add-edit-listing-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RegistrationPageComponent} from './authentication/registration-page/registration-page.component';
import {LoginPageComponent} from './authentication/login-page/login-page.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SignedInAuthGuard} from "./services/signedInAuth.guard";
import {SignedOutAuthGuard} from "./services/signedOutAuth.guard";
import {LogsPageComponent} from './logs-page/logs-page.component';
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [
  {path: '', component: ListingsPageComponent},
  {path: 'car/:id', component: ListingPageComponent},
  {path: 'add-car', component: AddEditListingPageComponent, canActivate: [SignedInAuthGuard]},
  {path: 'car/:id/edit', component: AddEditListingPageComponent, canActivate: [SignedInAuthGuard]},
  {path: 'register', component: RegistrationPageComponent, canActivate: [SignedOutAuthGuard]},
  {path: 'login', component: LoginPageComponent, canActivate: [SignedOutAuthGuard]},
  {path: 'logs', component: LogsPageComponent, canActivate: [SignedInAuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingPageComponent,
    AddEditListingPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    LogsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterOutlet,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports:[RouterModule],
  providers: [MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
