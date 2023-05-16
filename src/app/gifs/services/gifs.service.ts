import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/SearchGifsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _API_Key = "8YiOO7V3xQJaAHfI3QxV7YXc3Xcqj9XM";
  private _historial: string[] = [];
  private urlService: string = 'https://api.giphy.com/v1/gifs';
  public gifs: Gif[] = [];

  get historial() {
    return [...this._historial];
  }
  
  constructor(private http: HttpClient) {
      this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
      this.gifs = JSON.parse(localStorage.getItem("gifs")!) || [];

      // if (this._historial.length > 0) {
      //   this.agregarTermino(this._historial[0]);
      // }
   }

  agregarTermino( query:string ) {
    if (query.trim().length === 0) {
      return;
    }
    if(!this._historial.includes(query))
      this._historial.unshift(query);

    this._historial = this._historial.splice(0,10);
    localStorage.setItem("historial", JSON.stringify(this._historial));

    const params: HttpParams = new HttpParams()
        .set('api_key', this._API_Key)
        .set('q', query)
        .set('limit', '50')
    this.http.get<SearchGifsResponse>(`${this.urlService}/search`, {params})
      .subscribe((resp) => {
        console.log(resp.data);
        
        this.gifs = resp.data;
        localStorage.setItem("gifs", JSON.stringify(resp.data));
      });
  }
}