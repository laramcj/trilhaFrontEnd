import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent implements OnInit {

  valor: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
