import { Component, OnInit, Input } from "@angular/core";
import { SpotifyService } from "../../../services/spotify.service";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styles: []
})
export class ErrorComponent implements OnInit {
  @Input() error: any = {};
  errorMessage: string;
  loading: boolean = false;

  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit() {
    this.showError(this.error);
  }

  showError(error) {
    this.errorMessage = `${error.error.error.message} (${
      error.error.error.status
    })`;
  }

  getToken() {
    this.loading = true;
    this._spotifyService.getToken().subscribe(
      data => {
        localStorage.setItem("access_token", data["access_token"]);
        this.loading = false;
        location.reload();
      },
      error => this.showError(error)
    );
  }
}
