import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-componente-pai",
  template: "",
})

export class ComponentePaiComponent {
  _router : Router
  constructor( private router : Router){
    this._router = this.router
  }
  @Input() numeroComponent: number = 0;
  isPar(valor: number): string {
    return valor % 2 === 0 ? "par" : "ímpar";
  }
  isPrimo(valor: number): string {
    for (var i = 2; i < valor; i++){
        if(valor % i === 0){
            return "não é primo";
        } 
    }
    return valor > 1 ? "é primo" : "não é primo";
  }

}
