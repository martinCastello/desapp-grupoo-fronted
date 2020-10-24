import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseEndPoint = 'https://whispering-spire-55253.herokuapp.com/home/projects';
  // private baseEndPoint = 'http://localhost:8090/home/projects';
  constructor(private http: HttpClient) { }

  public listar(): Observable<any>{
    console.log(this.http.get(this.baseEndPoint));
    return this.http.get(this.baseEndPoint);
  }
}
