import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevacotizacion',
  templateUrl: './nuevacotizacion.component.html',
  styleUrls: ['./nuevacotizacion.component.css']
})
export class NuevacotizacionComponent {



  shoppingCar:any[]=[];

  producto:any={};
  Total:number=0;

  miFormulario = new FormGroup({
   /*  tipoUniforme: new FormControl(''),
   prenda: new FormControl(''),
   talla: new FormControl(''),
   cantidad: new FormControl(''),
   seleccionado: new FormControl(''), */
   
   
     tipoPrenda: new FormControl(''),
     tallaPrenda: new FormControl(['', [Validators.min(1), Validators.max(50)]]),
     cantidadPrenda: new FormControl(['', [Validators.min(1), Validators.max(50)]]),
    
   
  })


  addPerson(miformulario:any):void{
    console.log(miformulario.value.tipoPrenda);
    console.log(miformulario.value.tallaPrenda);
    console.log(miformulario.value);
    const pasarVariable = miformulario.value;
    console.log(pasarVariable);
  

    

    this.producto={};
    this.producto = {...this.precios.find((p:any) => p.prenda === miformulario.value.tipoPrenda && p.talla === miformulario.value.tallaPrenda)};

    console.log(this.producto);
    let precioTotal =this.producto.precio*miformulario.value.cantidadPrenda;
    this.producto.total = precioTotal;
    this.producto.cantidad = miformulario.value.cantidadPrenda;
    this.shoppingCar.push(this.producto);
    this.sumarTotal();
  
  }


  sumarTotal(){
    const sumaPrecios: number = this.shoppingCar.reduce((acumulador, producto) => {
      return acumulador + producto.total;
    }, 0);

    console.log(sumaPrecios);
    this.Total = sumaPrecios;
  }


   obtenerPrecio1(pasarVariable:any){

    console.log(pasarVariable.value);
    
   /*  let producto = this.precios.find((p:any) => p.prenda === formulario.value.tipoPrenda && p.talla === formulario.value.tallaPrenda)
    let precioTotal =this.producto.precio*formulario.value.cantidadPrenda;
    return producto; */
  }




  seleccionarOpcion(args:any) {
    console.log(args.originalTarget.value);
    let valores = args.originalTarget.value;
    this.arrayCargarUnicamente=this.precios.filter(x=>x.prenda==valores);
    
  }
  
  
  arrayCargarUnicamente:any[]=[];


  precios:any[]=[
    {"prenda":"camibuso", "talla":"6", "precio":18000},
    {"prenda":"camibuso", "talla":"8", "precio":20000},
    {"prenda":"camibuso", "talla":"10", "precio":22000},
    {"prenda":"camibuso", "talla":"12", "precio":24000},
    {"prenda":"camibuso", "talla":"14", "precio":26000},
    {"prenda":"camibuso", "talla":"16", "precio":28000},
    {"prenda":"camibuso", "talla":"m", "precio":30000},
    {"prenda":"camibuso", "talla":"l", "precio":32000},
    {"prenda":"chaqueta", "talla":"6", "precio":50000},
    {"prenda":"chaqueta", "talla":"8", "precio":55000}
  ];


  tipoPrenda:any[]=[
    {"prenda":"camibuso"},
    {"prenda":"chaqueta"},
    {"prenda":"pantalon"},
    {"prenda":"falda"},   
  ];

}
