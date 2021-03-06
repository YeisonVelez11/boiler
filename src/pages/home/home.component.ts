import { Component, OnInit } from '@angular/core';
import  {SERVICES } from '../../config/webservices';
import  {MESSAGES } from '../../config/messages';
import { ServicesProvider } from '../../providers/services';
import * as M from "materialize-css/dist/js/materialize";
import ScrollBooster from 'scrollbooster'
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  aConversacion:any=
  [
    {
      "emisor":"Agente",
      "mensaje": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste voluptatum sit quas. Quibusdam perferendis sint fugit ab voluptate, voluptas doloremque esse assumenda magnam et quisquam itaque suscipit placeat illo?"
    },
    {
      "emisor":"Cliente",
      "mensaje": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste voluptatum sit quas. Quibusdam perferendis sint fugit ab voluptate, voluptas doloremque esse assumenda magnam et quisquam itaque suscipit placeat illo?"
    },
    {
      "emisor":"Agente",
      "mensaje": "Hola buenas, tardes bienvenido a CHEC"
    },
    {
      "emisor":"Agente",
      "mensaje": "Hola buenas, tardes bienvenido a CHEC"
    },
    {
      "emisor":"Cliente",
      "mensaje": "Hola buenas, tardes bienvenido a CHEC"
    }


  ]
  
  idNiu:any;
  parametros:any=new FormData();
  aDataUser:any;
  constructor(

  		public ServicesProvider:ServicesProvider/*,
  		private route: ActivatedRoute*/

  	) { }

  ngOnInit() {
     /*this.route.params.subscribe(params => {
     	console.log(params);
      this.idNiu=params['niu'];
      this.parametros.append("NIU",parseInt(this.idNiu));
      this.fn_getbyNiu();
    });
*/
   setTimeout(()=>{
    var elems = document.querySelectorAll('.fixed-action-btn');
    console.log(elems);
    var instances = M.FloatingActionButton.init(elems);

   },1000)


      let viewport:any = document.querySelector('.app')
      let content:any = viewport.querySelector('.app-inner')
      console.log(content)
      let scr = new ScrollBooster({
        viewport: viewport, 
        content: content, 
        // textSelection: true,
        emulateScroll: true,
        onClick: (data, event)=> {
          event.preventDefault()
        },
        shouldScroll: (data, event) => {
          if (event.target.tagName == 'BUTTON') {
            return false
          } else {
            return true
          }
        },
        onUpdate: (data)=> {
          // viewport.scrollLeft = data.position.x
          // viewport.scrollTop = data.position.y
          content.style.transform = `translate(
            ${-data.position.x}px,
            ${-data.position.y}px
          )`
        }
      })


  }

  open() {
    // const modalRef = this.modalService.open(ModalComponent);
    this.ServicesProvider.open();
  }
  fn_getbyNiu(){
	/*this.ServicesProvider.preloaderOn();
    this.ServicesProvider.post(SERVICES.GETBYNIU,  this.parametros,true).then(data=>{
    	console.log(data);
    	this.aDataUser=data[0];
    	console.log(this.aDataUser);
    	this.ServicesProvider.preloaderOff();
    }, _fail => {
      this.ServicesProvider.preloaderOff();
      this.ServicesProvider.generarPopupGenerico("Error", "Ha ocurrido un problema, por favor intentalo de nuevo",null);
    });
	  */

  }

}
