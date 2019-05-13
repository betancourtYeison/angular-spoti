import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private _http: HttpClient) {}

  getToken() {
    let url = "https://spotify-get-token.herokuapp.com/spotify";
    let client_id = "ca45d1c7b6d14f8ea5857160e853db44";
    let client_secret = "2dd5a8d17d6c4920a0a294922fb221f8";
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this._http.get(`${url}/${client_id}/${client_secret}`, {
      headers
    });
  }

  getQuery(query: string) {
    let access_token = localStorage.getItem("access_token");
    let url = `https://api.spotify.com/v1/${query}`;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`
    });

    return this._http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?country=CO").pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=20`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtistById(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=co`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
