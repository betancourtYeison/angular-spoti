import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";
// import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  // countries: any[] = [];
  // constructor(private _http: HttpClient) {
  //   this._http
  //     .get("https://restcountries.eu/rest/v2/lang/es")
  //     .subscribe((data: any) => (this.countries = data));
  // }
  newReleases: any = [];
  loading: boolean = true;
  errorActivate: boolean = false;
  error: any = {};

  constructor(private _spotifyService: SpotifyService) {
    this._spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.loading = false;
      },
      error => this.showError(error)
    );
  }

  showError(error) {
    this.errorActivate = true;
    this.loading = false;
    this.error = error;
  }
}
