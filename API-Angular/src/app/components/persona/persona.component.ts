import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  listPersonas:Persona[]=[]

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){

    this.personaService.getAllPersonas().subscribe(data => {

      console.log(data)
      this.listPersonas = data;

    },error => {

        console.log(error);
    })
  }

  deletePersona(id:any){

    this.personaService.deleteById(id).subscribe(data=>{
    this.getPersonas();
 
 
    })}



}
