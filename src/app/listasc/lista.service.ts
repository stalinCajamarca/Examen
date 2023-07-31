import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  
  private data: any[] = [
    {
      //1
      codigoregistro:"1",
      fecha:"25/12/2000",
      cliente:"juan lopez",
      tipodeinteraccion:"fb",
      descripcion:"inversionista en publicidad"
      },
      //2
      {
        codigoregistro:"2",
        fecha:"10/02/2000",
        cliente:"ivan reyes",
        tipodeinteraccion:"instagram",
        descripcion:"mirar historias y calificar"
        },
        //3
        {
        codigoregistro:"3",
        fecha:"18/11/2000",
        cliente:"jaime galarza",
        tipodeinteraccion:"ws",
        descripcion:"contactar con empresas"
        },
         //4
         {
          codigoregistro:"4",
          fecha:"17/02/2000",
          cliente:"olger reyes",
          tipodeinteraccion:"telefono fijo",
          descripcion:"llamadas importantes"
         },
          //5
        {
          codigoregistro:"5",
          fecha:"10/5/2000",
          cliente:"pilar ruiz",
          tipodeinteraccion:"instagram",
          descripcion:"mirar historias y calificar"
         },
         //6
         {
          codigoregistro:"6",
          fecha:"30/12/2000",
          cliente:"dora pardo",
          tipodeinteraccion:"ws",
          descripcion:"contactar con empresas"
         },
         //7
         {
          codigoregistro:"7",
          fecha:"5/11/2000",
          cliente:"cesila sacaquirin",
          tipodeinteraccion:"celular",
          descripcion:"llamadas importantes"
         },
         //8
         {
          codigoregistro:"8",
          fecha:"17/12/2000",
          cliente:"gena valles",
          tipodeinteraccion:"fb",
          descripcion:"inversionista en publicidad"
         },
         //9
         {
          codigoregistro:"9",
          fecha:"23/11/2000",
          cliente:"ivon burgos",
          tipodeinteraccion:"instagram",
          descripcion:"mirar historias y calificar"
         },
         //10
         {
          codigoregistro:"10",
          fecha:"23/11/2000",
          cliente:"rocio reyes",
          tipodeinteraccion:"instagram",
          descripcion:"mirar historias y calificar"
         }
  ];
  private resultados: any[] = []; 
  addData(data) {    this.data.push(data);  } 
  getData() {    return this.data;  }  
  setResultados(resultados) {    this.resultados = resultados;  }  
  getResultados() {    return this.resultados;  }

 private ListadeDatos:ListaDatos[]=[
  
 ];
}
  export interface ListaDatos{
    codigoregistro:string;
    fecha: string;
    cliente:string;
    tipodeinteraccion:string;
    descripcion:string;
  }

  