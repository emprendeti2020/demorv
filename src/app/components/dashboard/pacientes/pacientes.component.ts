import { Component, OnInit } from '@angular/core';

export interface Paciente {
  rut: string;
  nombre: string;
  email: string;
  whatsapp: string;
  fechaNacimiento: string;
  edad: string;
  calle: string;
  numero: string;
  comuna: string;
  ciudad: string;
  preDiagnostico: string;
  diagnostico: string;
}


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  listaPacientes: Paciente[] = [
    {rut: '100222200', nombre: 'Rosario Rosales', email: 'rosario@gmail.com', whatsapp: '+56 972388882', fechaNacimiento: '10/08/1994', edad: '27', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: '', diagnostico: ''},
    {rut: '333200300', nombre: 'Karla Avalos', email: 'karla@gmail.com', whatsapp: '+56 972342444', fechaNacimiento: '15/08/1980', edad: '27', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: '', diagnostico: ''},
    {rut: '104440300', nombre: 'Pedro Perez', email: 'pedro@gmail.com', whatsapp: '+56 97211113', fechaNacimiento: '20/05/1970', edad: '23', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: '', diagnostico: ''},
    {rut: '444400300', nombre: 'Sara Rosales', email: 'sara@gmail.com', whatsapp: '+56 972333123', fechaNacimiento: '19/04/1990', edad: '55', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: '', diagnostico: ''},
    {rut: '856200300', nombre: 'Melani Moran', email: 'melani@gmail.com', whatsapp: '+56 972342123', fechaNacimiento: '09/02/1995', edad: '21', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: '', diagnostico: ''},
    {rut: '865222300', nombre: 'Ruth Resto', email: 'ruth@gmail.com', whatsapp: '+56 972555223', fechaNacimiento: '09/08/1994', edad: '60', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: '', diagnostico: ''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
