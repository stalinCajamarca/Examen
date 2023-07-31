import { Component } from '@angular/core';
import { ListaService } from '../../serviceslista/lista.service';

@Component({
  selector: 'app-mirar',
  templateUrl: './mirar.component.html',
  styleUrls: ['./mirar.component.css']
})
export class MirarComponent {
  dataList: any[];
  constructor(private dataService: ListaService) {}  
  ngOnInit() 
  {
    this.dataList = this.dataService.getData();
  }
}
