import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  agregarPersona: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private router: Router
  ) {
    this.agregarPersona = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addPersona() {
    const persona: Persona = {
      nombre: this.agregarPersona.get('nombre')?.value,
      apellido: this.agregarPersona.get('apellido')?.value,
      dni: this.agregarPersona.get('dni')?.value,
    };

    this.personaService.postPersona(persona).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
