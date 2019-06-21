import { Component, OnInit } from '@angular/core';
import  {SERVICES } from '../../config/webservices';
import  {MESSAGES } from '../../config/messages';
import { ServicesProvider } from '../../providers/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  idNiu:any;
  parametros:any=new FormData();
  aDataUser:any;
  constructor(

  		public ServicesProvider:ServicesProvider,
  		private route: ActivatedRoute

  	) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
     	console.log(params);
      this.idNiu=params['niu'];
      this.parametros.append("NIU",parseInt(this.idNiu));
      this.fn_getbyNiu();
    });


  }


  fn_getbyNiu(){
	this.ServicesProvider.preloaderOn();
    this.ServicesProvider.post(SERVICES.GETBYNIU,  this.parametros,true).then(data=>{
    	console.log(data);
    	this.aDataUser=data[0];
    	console.log(this.aDataUser);
    	this.ServicesProvider.preloaderOff();
    }, _fail => {
      this.ServicesProvider.preloaderOff();
      this.ServicesProvider.generarPopupGenerico("Error", "Ha ocurrido un problema, por favor intentalo de nuevo",null);
    });
	  

  }

}
