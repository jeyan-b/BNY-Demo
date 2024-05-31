import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    let userList= [{
      firstName: 'jeyan',
      lastName: 'b',
      age: 33,
      gender: 'Male',
      email: 'jeyanb@birlasoft.com',
      mobile: '983745834' 
    },
    {
      firstName: 'prakash',
      lastName: 'p',
      age: 33,
      gender: 'Male',
      email: 'praksh@birlasoft.com',
      mobile: '983245834' 
    }
    ]
    return  of(userList);
  }
}
