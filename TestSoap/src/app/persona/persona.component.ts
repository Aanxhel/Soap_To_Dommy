import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

	nombrePersona:string = "Yayoi";
	apellidoPersona:string = "Cuesta";
	edadPersona:number = 20;

  constructor() { }

  ngOnInit(): void {
	
  }

	
}
