import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {tallas, precios, tipoPrenda} from '../../share/archives';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-creatorpdf',
  templateUrl: './creatorpdf.component.html',
  styleUrls: ['./creatorpdf.component.css']
})
export class CreatorpdfComponent {


  shoppingCar:any[]=[];

  producto:any={};
  Total:number=0;
  favoriteSeason:string="";


 miFormularioCliente = new FormGroup({
  nombre: new FormControl('',[Validators.required]),
  identificacion: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
  
 })

  miFormulario = new FormGroup({
     tipoPrenda: new FormControl('',[Validators.required]),
     tallaPrenda: new FormControl('', [Validators.required, Validators.min(6), Validators.max(50)]),
     cantidadPrenda: new FormControl('', [Validators.required, Validators.min(1), Validators.max(50)])
  });

  datosCliente = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    identification: new FormControl('', [Validators.required, Validators.min(1), Validators.max(99999999999999)]),
   })


  validacion:boolean=this.miFormulario.invalid;


  addPerson(miformulario:any):void{
    console.log(miformulario.value)
  
 
  

    this.producto={};
    this.producto = {...this.precios.find((p:any) => p.prenda === miformulario.value.tipoPrenda && p.talla === miformulario.value.tallaPrenda)};

    console.log(this.producto);
    let precioTotal =this.producto.precio*miformulario.value.cantidadPrenda;
    this.producto.total = precioTotal;
    this.producto.cantidad = miformulario.value.cantidadPrenda;
    this.shoppingCar.push(this.producto);
    this.sumarTotal();
  console.log(this.shoppingCar);
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
  }




  seleccionarOpcion(args:any) {
    console.log(args.originalTarget.value);
    let valores = args.originalTarget.value;
    this.arrayCargarUnicamente=this.precios.filter(x=>x.prenda==valores);
    
  }
  
  
  arrayCargarUnicamente:any[]=[];



  tallas=tallas;
  precios=precios;
  tipoPrenda = tipoPrenda;



  
  borrarElemento(i:number){
    this.shoppingCar.splice(i,1);
    this.sumarTotal();
  }

  aumentar(i:number): void{
    this.shoppingCar[i].cantidad +=1;
    this.shoppingCar[i].total = this.shoppingCar[i].cantidad*this.shoppingCar[i].precio;
    this.sumarTotal();
    }

  disminuir(i:number): void{
    if(this.shoppingCar[i].cantidad<=1)return
    this.shoppingCar[i].cantidad-=1;
    this.shoppingCar[i].total = this.shoppingCar[i].cantidad*this.shoppingCar[i].precio;
    this.sumarTotal();
    }


  /************************************* */
  /************************************* */
  /************************************* */
  /************************************* */


  

  generarPDF() {
    // Definir la estructura de la tabla

   
    const columnas = ['id','Cantidad', 'Precio Unitario', 'Prenda', 'Talla', 'Total'];
    const filas:any []= [];
  
    // Llenar las filas con los datos del array
    this.shoppingCar.forEach((item, index) => {
      filas.push([(index+1).toString(), item.cantidad.toString(), "$"+item.precio.toString(), item.prenda, item.talla,"$"+ item.total.toString()]);
    });

    console.log(filas);

    const fechaActual = new Date();
    const fechaFormateada:any = this.formatearFecha(fechaActual);

    console.log(fechaFormateada);
  
    // Configurar la definición del documento PDF
    const docDefinition:any = {
      watermark: { text: 'CANCELADO', absolutePosition: { x: 0, y: 0 },  margin: [0, 0, 0, 0], color: 'red', opacity: 0.3, fontSize: 40},

      content: [
        { text: 'Factura de venta', style: 'header' },
     
        
        {
          alignment: 'justify',
          columns: [
            {
              with:90,
              text: fechaFormateada},
            {
              with:120,
              text:`Cliente: ${this.datosCliente.value.firstName?.toUpperCase()}  ${this.datosCliente.value.lastName?.toUpperCase()} \nIdentificación: ${this.datosCliente.value.identification}`
            }
          ]
        },'\n',
    
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*', '*', '*'], // Ancho de las columnas
            body: [columnas, ...filas], // Agregar filas
          },
        },
        {text: 'Total: $ ' + this.Total, style:'total'},
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        total:{
          fontSize:18,
          bold:true,
          color: 'red'
        }
    

      },
    };
  
    // Generar el PDF
    //pdfMake.createPdf(docDefinition).download('tabla_informacion.pdf');
    const pdf = pdfMake.createPdf(docDefinition);
    pdf.open();
  }


  /*********************************** */
  /*********************************** */
  /*********************************** */

  /**funcion para obtener la fecha */

   formatearFecha(fecha: Date): string {
    const opcionesFecha: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
  
    const opcionesHora: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  
    const fechaFormateada = fecha.toLocaleDateString('es-CO', opcionesFecha);
    const horaFormateada = fecha.toLocaleTimeString('es-CO', opcionesHora);
  
    return `${fechaFormateada} ${horaFormateada}`;
  }

}
