import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiHerokuUrl = environment.apiUrl;
  persona: any;
  cargada = false;
  url:string="https://floating-chamber-24100.herokuapp.com";

  constructor(private http:HttpClient) { }

  public obtenerDatosPersona(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.url+"/"+id);
   }
   public getPersonas(): Observable<Persona[]> {
     return this.http.get<Persona[]>(`${this.apiHerokuUrl}/personas/all`);
  
   }
  }