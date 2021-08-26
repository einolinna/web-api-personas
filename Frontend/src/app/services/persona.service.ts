import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  apiUrl = 'http://localhost:9000/'
  apiPersona= 'api/v1/personas/'

  constructor(private http: HttpClient) { }

  getAllPersonas(): Observable<any>{

    return this.http.get(this.apiUrl + this.apiPersona);

  }

  postPersona(persona:Persona): Observable<any>{

    return this.http.post(this.apiUrl + this.apiPersona, persona);

  }

  deleteById(id: number): Observable<any>{

    return this.http.delete(this.apiUrl + this.apiPersona + id);

  }

}
