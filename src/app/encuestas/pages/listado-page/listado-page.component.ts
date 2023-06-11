import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-page',
  templateUrl: './listado-page.component.html',
  styleUrls: ['./listado-page.component.css']
})
export class ListadoPageComponent {

  @Input()
  public encuestas: any = [];


}
