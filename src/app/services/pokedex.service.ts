import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private apiUrl = 'https://pokebuildapi.fr/api/v1/pokemon/';
  private data : any;
  private array : any[] = [];

  constructor(private http: HttpClient) { }

  getPokedex(debut : number, fin : number){
    this.array = [];
    for (let index = debut; index < debut+fin ; index++) {
      this.data = this.getPokemon(index);
      this.array.push(this.data);
      this.data = null;
    }
    return this.array;
  }

  getPokemon(numero : number) : any{
    let url : string = this.apiUrl+numero;
    this.fetchData(url);
    return this.data;
  }

  getData(url : string): Observable<any> {
    return this.http.get<any>(url);
  }

  fetchData(url : string): any {
    this.getData(url).subscribe(
      (response) => {
         this.data = response;
      },
      (error) => {
        console.error('Une erreur s\'est produite : ', error);
      }
    );
  }
}
