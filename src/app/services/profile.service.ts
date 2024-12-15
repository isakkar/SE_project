import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/api/profiles'; // Backend URL

  constructor(private http: HttpClient) {}

  // POST method to create a new profile
  addProfile(profile: any): Observable<any> {
    return this.http.post(this.apiUrl, profile);
  }

  // GET method to get existing profiles
  getProfiles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
