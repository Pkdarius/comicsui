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
import { HeaderComponent } from './cms/header/header.component';
import { SearchFormComponent } from './cms/header/search-form/search-form.component';
import { NavbarItemComponent } from './cms/header/navbar-item/navbar-item.component';
import { MainContainerComponent } from './cms/main-container/main-container.component';
import { FooterComponent } from './cms/footer/footer.component';
import { ThemePickerComponent } from './cms/theme-picker/theme-picker.component';
import { ChatBoxComponent } from './cms/chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SidebarComponent,
    SidebarZoneComponent,
    MenuItemComponent,
    HeaderComponent,
    SearchFormComponent,
    NavbarItemComponent,
    MainContainerComponent,
    FooterComponent,
    ThemePickerComponent,
    ChatBoxComponent
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
