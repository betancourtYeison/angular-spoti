import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styles: []
})
export class ArtistComponent {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean = true;
  errorActivate: boolean = false;
  error: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService,
    private _location: Location
  ) {
    this._activatedRoute.params.subscribe(params =>
      this.getArtistById(params["id"])
    );
  }

  showError(error) {
    this.errorActivate = true;
    this.loading = false;
    this.error = error;
  }

  getArtistById(id: string) {
    this._spotifyService.getArtistById(id).subscribe(
      data => {
        this.artist = data;
        this.getTopTracks(id);
      },
      error => this.showError(error)
    );
  }

  getTopTracks(id: string) {
    this._spotifyService.getTopTracks(id).subscribe(
      data => {
        this.topTracks = data;
        this.loading = false;
      },
      error => this.showError(error)
    );
  }

  goBack() {
    this._location.back();
  }
}
