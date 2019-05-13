import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styles: []
})
export class CardComponent {
  @Input() items: any[] = [];

  constructor(private _router: Router) {}

  showArtist(item: any) {
    this._router.navigate(["/artist", item.id]);
  }
}
