import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent {
  artists: any = [];
  loading: boolean = false;
  errorActivate: boolean = false;
  error: any = {};

  constructor(private _spotifyService: SpotifyService) {}

  search(term) {
    if (term.length > 0) {
      this.loading = true;
      this._spotifyService.getArtists(term).subscribe(
        (data: any) => {
          this.artists = data;
          this.loading = false;
        },
        error => this.showError(error)
      );
    }
  }

  showError(error) {
    this.errorActivate = true;
    this.loading = false;
    this.error = error;
  }
}
