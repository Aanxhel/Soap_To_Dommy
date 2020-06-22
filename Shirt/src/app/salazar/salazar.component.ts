import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salazar',
  templateUrl: './salazar.component.html',
  styleUrls: ['./salazar.component.css']
})
export class SalazarComponent {

	addJabon = false;
	addJabonStatus = "Sin Stock";
	
	constructor(){
		setTimeout(
			()=>{
				this.addJabon = true; 				//notar que tienen (-)
			}
			,3000
		);
	}
	
	
	onCrearJabon(){
		this.addJabonStatus = "jabon agregado";
	}

}
