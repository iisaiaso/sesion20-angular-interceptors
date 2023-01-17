import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiusersService implements OnInit {
  title= 'listado de usuarios'

  urlApi = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getUsers(){
    return this.http.get<any>(this.urlApi)
  }
}
