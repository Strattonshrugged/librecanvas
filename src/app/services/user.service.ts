import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService, UserDetails } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }
  
  getAll(): Observable<any> {
    return this.http.get(`/api/users`, { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` }});
  }

  getById(id: number): Observable<any> {
    return this.http.get(`/api/users/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` }});
  }
}
