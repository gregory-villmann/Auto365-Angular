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
import { ListingPageComponent } from './listing-page/listing-page.component';
import { AddEditListingPageComponent } from './add-edit-listing-page/add-edit-listing-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const routes: Routes = [
  {path: '', component: ListingsPageComponent},
  {path: 'car/:id', component: ListingPageComponent},
  {path: 'add-car', component: AddEditListingPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingPageComponent,
    AddEditListingPageComponent
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
    MatInputModule
  ],
  exports:[RouterModule],
  providers: [MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
