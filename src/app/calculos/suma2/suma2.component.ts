import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-suma2',
  templateUrl: './suma2.component.html',
  styleUrls: ['./suma2.component.css']
  
})
export class Suma2Component implements OnInit {
  nom:string="";
  cant!: number;
  bol!: number;
  total:any;
  costo: number = 12.00;
  imp: boolean = false;
  mensaje: string = "";
  check: number = 0;
  res: number = 0.0;
  tarjSeleccionada: string = 'No';
  
  tarj=[
    'Si',
    'No',
  ];

  ngOnInit(): void {
    this.imp = false;
  }

  Procesar():void{
    this.check= this.bol/this.cant;
    if(this.nom=="" || this.cant==null || this.bol==null) {
      this.imp=false;
      alert("Ingrese datos faltantes para continuar");
    }
    else if(this.check>=7.1){
      this.imp=false;
      alert("Solo se pueden adquirir 7 boletas por cliente");
      this.total=null;
    }
    else if(this.check<=7){
      this.Proceso();
    }
  }
    Proceso():void{
      switch(this.tarjSeleccionada){
        case 'No':
        if (this.bol>=6)  {
        this.mensaje="";
        this.res=(this.bol * this.costo);
        this.total=(this.res*0.15);
        this.res=(this.res-this.total);
        this.total=this.res.toFixed(2);
        this.imp = true;
      }
        else if (this.bol>=3 && this.bol<=5) {
        this.mensaje="";
        this.res = (this.bol * this.costo);
        this.total = (this.res*0.10);
        this.res = (this.res-this.total);
        this.total = this.res.toFixed(2);
        this.imp = true;
      }
        else if (this.bol>=1 && this.bol<=2) {
        this.mensaje="";
        this.total = (this.bol * this.costo).toFixed(2);
        this.imp = true;
     }
     break;
     case 'Si' :
      if(this.bol >= 6){
        this.mensaje="";
        this.res=this.bol * this.costo;
        this.total=(this.res*0.15);
        this.res=(this.res-this.total);
        this.total=(this.res*0.10)
        this.res=(this.res-this.total);
        this.total=this.res.toFixed(2);
        this.imp = true;
      }
      else if(this.bol>=3 && this.bol<=5) {
        this.mensaje="";
        this.res=this.bol*this.costo;
        this.total=(this.res*0.10);
        this.res=(this.res-this.total);
        this.total=(this.res*0.10)
        this.res=(this.res-this.total);
        this.total=this.res.toFixed(2);
        this.imp = true;
      }
      else if(this.bol>=1 && this.bol<=2){
        this.mensaje="";
        this.res=this.bol*this.costo;
        this.total=(this.res*0.10);
        this.res=(this.res-this.total);
        this.total=this.res.toFixed(2);
        this.imp = true;
      }
      break;
    }
  }
  cancelar(): void{
    this.nom="";
    this.cant=0;
    this.bol=0;
    this.total=null;
    this.tarj=["Si","No"];
    this.imp = false;
    this.mensaje = "";
  }
}
