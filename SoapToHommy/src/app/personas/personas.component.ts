//se improta el decorador del nucleo
import { Component } from '@angular/core';


//se va a utilizar desde otros archivos por lo tanto se agrega 'export'
//se le agrega un decorador
@Component({
    selector: 'app-personas',                 //asegurar de ser nombre unico
    templateUrl: './personas.component.html', // este de debe registrar en app.module.ts
    //seleccionador de hoja de estilos que se manejan para css
    //styleUrls: ['./app.component.css']

})
export class PersonasComponent{

}
