import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { InicioComponent } from "./inicio/inicio.component";
import { PacientesComponent } from "./pacientes/pacientes.component";
import { PacienteFormularioComponent } from "./pacientes/paciente-formulario/paciente-formulario.component";
import { DiagnosticosFormularioComponent } from "./pacientes/diagnosticos/diagnosticos-formulario/diagnosticos-formulario.component";
import { DiagnosticosComponent } from "./pacientes/diagnosticos/diagnosticos.component";

registerLocaleData(localeEs);

const routes: Routes = [
    { path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'pacientes', component: PacientesComponent },
      { path: 'pacientes/formulario', component: PacienteFormularioComponent },
      { path: 'pacientes/formulario/:rut', component: PacienteFormularioComponent },
      { path: 'pacientes/diagnosticos', component: DiagnosticosComponent },
      { path: 'pacientes/diagnosticos/formulario', component: DiagnosticosFormularioComponent },
      { path: 'pacientes/diagnosticos/formulario/:rut', component: DiagnosticosFormularioComponent }
    ]}
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }