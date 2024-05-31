import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users:any= [];

  constructor(private userService:UserService){

  }

  ngOnInit(){
    console.log(this.users);
    this.userService.getUsers().subscribe(res =>{
      // this.user:User[] =
      res.forEach(element => {
      let userData:User = element;  
      this.users.push(userData)      
      });
      // this.user:User[]= res;
      console.log(this.users);
    })
  }

}
