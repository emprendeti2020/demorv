import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../pacientes.component';

@Component({
  selector: 'app-diagnosticos-formulario',
  templateUrl: './diagnosticos-formulario.component.html',
  styleUrls: ['./diagnosticos-formulario.component.css']
})
export class DiagnosticosFormularioComponent implements OnInit {

  paciente:Paciente = {rut: '', nombre: '', email: '', whatsapp: '', fechaNacimiento: '', edad: '' , calle: '', numero: '', comuna: '', ciudad: '', preDiagnostico: '', diagnostico: ''}; 

  listas: string[] = ['Santiago', 'Iquique', 'Copiapó', 'Talca', 'Concepción'];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.activatedRoute.params
        .subscribe(params => {
          let rut: string = params['rut'];

          if(rut){
            this.paciente = {rut: '100200300', nombre: 'Rosario Rosales', email: 'rosario@gmail.com', whatsapp: '+56 972342123', fechaNacimiento: '10/08/1994', edad: '27', calle: 'Calle Salvador', numero: '24', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: 'Rosario necesita una rinoplastia', diagnostico: ''}; 
          }

        });
  }

}
