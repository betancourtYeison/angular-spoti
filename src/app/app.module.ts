import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { CardComponent } from "./components/shared/card/card.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";

import { APP_ROUTES } from "./app.routes";

import { NoimagePipe } from "./pipes/noimage.pipe";
import { DomsecurePipe } from "./pipes/domsecure.pipe";
import { ErrorComponent } from './components/shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    DomsecurePipe,
    CardComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
