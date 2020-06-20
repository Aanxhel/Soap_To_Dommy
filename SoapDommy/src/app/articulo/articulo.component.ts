/*
se crea articulo componentes con nomenclatura
[nombreProyecto].component.ts
Articulo.component.ts
*/
import { Component } from '@angular/core';

@Component({										// decorador dentro de su mismo nucleo
selector: 'app-articulo',						// selector para decorador
templateUrl: './articulo.component.html'
})

export class ArticuloComponent {						// la clase sera [proyecto][component]
}