import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;
  operacion: string= '';
  
  calcular(){
    switch (this.operacion){
      case 'sumar':
        this.resultado=parseInt(this.num1)+parseInt(this.num2);
        break;
       
        case 'restar':
          this.resultado=parseInt(this.num1)-parseInt(this.num2);
          break;
        
        case 'multiplicar':
          this.resultado=parseInt(this.num1)*parseInt(this.num2);
          break;
        
        case 'dividir':
          this.resultado=parseInt(this.num1)/parseInt(this.num2);
          break;
    }
  }

}
