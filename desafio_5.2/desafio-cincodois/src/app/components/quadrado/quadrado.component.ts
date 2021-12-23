import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.css']
})
export class QuadradoComponent implements OnInit {

  valor:number = 0;

  constructor( private router: Router,)
 {
 this.valor = this.router.getCurrentNavigation()?.extras.state?.valorRota;
 }

  ngOnInit() {
  }

  

}
