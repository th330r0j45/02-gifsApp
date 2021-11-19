import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private apiKey:string = 'sQqcRE8uS3JhjAHeTEbKHUToo24ZAzka';
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    console.log(this._historial);
  }
  constructor() {}
}
