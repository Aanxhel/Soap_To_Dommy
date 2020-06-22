import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-soap',
  templateUrl: './item-soap.component.html',
  styleUrls: ['./item-soap.component.css']
})
export class ItemSoapComponent  {
	/*
		en este punto podemos asignar las variables 
	*/
	nombreItem:string = "café" ;
	pesoItem:number = "35.00";
	
	//para acceder a una variable en privado se crea el elemento
	private valorItem:number = "50";
	
	getValorItem():number{
		return this.valorItem;
	}

}
