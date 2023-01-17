import { ApiusersService } from './../../services/apiusers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-users',
  templateUrl: './mostrar-users.component.html',
  styleUrls: ['./mostrar-users.component.css']
})
export class MostrarUsersComponent implements OnInit {

  showUsers: any = []
  title!: string
  nombre!: string
  constructor(private users: ApiusersService) { }

  ngOnInit(): void {
    this.title = this.users.title
  }
  getShowUsers() {
    this.nombre = 'Nombre'
    this.users.getUsers().subscribe(data => this.showUsers = data)
  }


}
