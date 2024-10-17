import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  api = "https://reqres.in/api/users"

  constructor(private http: HttpClient) { }

  //Operazione di get per prendere le informazioni dall'API

  getUser(page: number, perPage: number){

    //Creo la variabile che fungerà da richiamo per l'API

    const x = `${this.api}?page=${page}&perPage=${perPage}`;

    //Ritorno come valore la variabile x che continene i dati dell'API

    return this.http.get(x)

  }
}
