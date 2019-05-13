import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "domsecure"
})
export class DomsecurePipe implements PipeTransform {
  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: string, url: string): any {
    const URL = "https://open.spotify.com/embed?uri=";
    return this._domSanitizer.bypassSecurityTrustResourceUrl(URL + value);
  }
}
