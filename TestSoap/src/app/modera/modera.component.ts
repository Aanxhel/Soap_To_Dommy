import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modera',
  templateUrl: './modera.component.html',
  styleUrls: ['./modera.component.css']
})
export class ModeraComponent  {
	agregarPersona = false;
	agregarPersonaStatus = "No se ha agregado ninguna persona";
	tituloPersona = "Ingeniero";
	
	constructor(){
		setTimeout(
			()=> {
				this.agregarPersona= true;
			}
			,3000);
	}
	
	onCrearPersona(){
		this.agregarPersonaStatus = "persona agregada!!";
	}
	
	onModificarPersona(event: Event){
		this.tituloPersona = (<HTMLInputElement>event.target).value;
	}
}
