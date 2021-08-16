import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoaderComponent} from './cms/loader/loader.component';
import {SidebarComponent} from './cms/sidebar/sidebar.component';
import {SidebarZoneComponent} from './cms/sidebar/sidebar-zone/sidebar-zone.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuItemComponent} from './cms/sidebar/menu-item/menu-item.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SidebarComponent,
    SidebarZoneComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
