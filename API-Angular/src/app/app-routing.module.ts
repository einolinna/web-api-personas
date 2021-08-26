import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/persona/add/add.component';
import { PersonaComponent } from './components/persona/persona.component';
import { UpdateComponent } from './components/persona/update/update.component';

const routes: Routes = [
  {path: 'persona', component:PersonaComponent},
  {path: 'add', component:AddComponent},
  {path: 'edit', component:UpdateComponent},
  {path:'**', redirectTo:'persona'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
