import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDetails } from '../../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: UserDetails[];

  constructor(private userService: UserService) {}
  
  ngOnInit() {    
    this.userService.getAll().subscribe(userList => {
      this.users = userList;
    }, (err) => {
      console.error(err);
    });
  }

}
