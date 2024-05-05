import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headerComponent/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { MenuOptionComponent } from './menu-option/menu-option.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { SliderComponent } from './slider/slider.component';
import { MusicSelectonComponent } from './music-selecton/music-selecton.component';
import { SongsComponent } from './songs/songs.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { ArtistsSectionComponent } from './artists-section/artists-section.component';
import { SmallScreenSignInComponent } from './small-screen-sign-in/small-screen-sign-in.component';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent, SearchBarComponent, HamburgerMenuComponent, SettingsMenuComponent, SidebarComponent, MenuOptionComponent, ContentSectionComponent, SliderComponent, MusicSelectonComponent, SongsComponent, CardsComponent, ArtistsSectionComponent, SmallScreenSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
