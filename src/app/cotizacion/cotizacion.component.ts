import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent {



  

  miFormulario = new FormGroup({
    tipoUniforme: new FormControl(''),
    prenda: new FormControl(''),
    talla: new FormControl(''),
    cantidad: new FormControl(''),
    seleccionado: new FormControl(''),
    
   
  })


  addPerson(miformulario:any){
    console.log(miformulario.value.prenda);
    for (const prenda of this.precios) {
      if (miformulario.value.prenda === prenda.prenda  && miformulario.value.talla === prenda.talla) {
          console.log(prenda.precio*miformulario.value.cantidad);
      }
  }
  }











   tipoUniformes:any[]=[


    {"tipo":"diario"},
    {"tipo":"fisica"},
  ];

   tipoPrenda:any[]=[
    {"prenda":"camibuso"},
    {"prenda":"chaqueta"},
    {"prenda":"pantalon"},
    {"prenda":"falda"},   
  ];

   talla:any[]=[
    {"talla":"6"},  
    {"talla":"8"},  
    {"talla":"10"},  
    {"talla":"12"},  
    {"talla":"14"},  
    {"talla":"16"},  
    {"talla":"m"},
    {"talla":"l"}
  ];


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


  cantidad:any[]=[
    {"cantidad":1},
    {"cantidad":2},
    {"cantidad":3},
    {"cantidad":4}
  ];



/*   buscarPrecioPorNombreYTalla(nombrePrenda, talla) {
    for (const prenda of prendas) {
        if (prenda.tipo === nombrePrenda && prenda.talla === talla) {
            return prenda.precio;
        }
    }
    return "Prenda no encontrada"; // Opcional: si no se encuentra la prenda
}
 */


seleccionarOpcion(args:any) {
  console.log(args.originalTarget.value);
  let valores = args.originalTarget.value;
  this.arrayCargarUnicamente=this.precios.filter(x=>x.prenda==valores);
  
}


arrayCargarUnicamente:any[]=[

];

}
