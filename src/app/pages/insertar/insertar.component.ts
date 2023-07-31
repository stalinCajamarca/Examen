import { Component } from '@angular/core';
import { ListaService } from '../../serviceslista/lista.service';


@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent {
  codigoRegistro: string;  fecha: string;  cliente: string;  tipointeraccion: string;  descripcion: string;  
  constructor(private dataService: ListaService) { 
  }  
  guardar() {    const data = {      codigoRegistro: this.codigoRegistro,      fecha: this.fecha,      cliente: this.cliente,      tipointeraccion: this.tipointeraccion,      descripcion: this.descripcion    };    this.dataService.addData(data);  }  
  cancelar() {    this.codigoRegistro = '';    this.fecha = '';    this.cliente = '';    this.tipointeraccion = '';    this.descripcion= '';}
}
