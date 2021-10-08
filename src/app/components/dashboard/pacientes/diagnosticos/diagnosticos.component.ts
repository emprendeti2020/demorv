import { Component, OnInit } from '@angular/core';
import { Paciente } from '../pacientes.component';

@Component({
  selector: 'app-diagnosticos',
  templateUrl: './diagnosticos.component.html',
  styleUrls: ['./diagnosticos.component.css']
})
export class DiagnosticosComponent implements OnInit {

  listaPacientes: Paciente[] = [
    {rut: '100222200', nombre: 'Rosario Rosales', email: 'rosario@gmail.com', whatsapp: '+56 972388882', fechaNacimiento: '10/08/1994', edad: '27', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: 'Rosa desea un', diagnostico: ''},
    {rut: '333200300', nombre: 'Karla Avalos', email: 'karla@gmail.com', whatsapp: '+56 972342444', fechaNacimiento: '15/08/1980', edad: '27', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: 'Karla desea un', diagnostico: ''},
    {rut: '104440300', nombre: 'Pedro Perez', email: 'pedro@gmail.com', whatsapp: '+56 97211113', fechaNacimiento: '20/05/1970', edad: '23', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: 'Pedro desea un', diagnostico: ''},
    {rut: '444400300', nombre: 'Sara Rosales', email: 'sara@gmail.com', whatsapp: '+56 972333123', fechaNacimiento: '19/04/1990', edad: '55', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: 'Sara desea un', diagnostico: ''},
    {rut: '856200300', nombre: 'Melani Moran', email: 'melani@gmail.com', whatsapp: '+56 972342123', fechaNacimiento: '09/02/1995', edad: '21', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: 'Mela desea un', diagnostico: ''},
    {rut: '865222300', nombre: 'Ruth Resto', email: 'ruth@gmail.com', whatsapp: '+56 972555223', fechaNacimiento: '09/08/1994', edad: '60', calle: 'Calle Salvador', numero: '27', comuna: 'Natales', ciudad: 'Puerto Natales', preDiagnostico: 'Ruth desea un', diagnostico: ''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
