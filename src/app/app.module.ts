import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { routing, appRoutingProviders } from './app-routing.module'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ServicesProvider } from '../providers/services';
import { DatePipe } from '@angular/common';
import { fechahumana } from '../pipes/pipe-fechahumana';
import { fechaespanol } from '../pipes/pipe-fecha-espanol';
import { fecha_mes_espanol } from '../pipes/pipe-fecha-mes-espanol';
import { fechanormal } from '../pipes/pipe-fecha-normal';
import { ellipsis } from '../pipes/pipe-ellipsis';
import { pipekeys } from '../pipes/pipe-keys';
import { safepipe } from '../pipes/pipe-safe';


import { NotFoundComponent,
         HomeComponent,
         ModalComponent 
        } from '../pages/index.paginas';

//import * as M from "materialize-css/dist/js/materialize";
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    fechahumana,
    fechaespanol,
    fecha_mes_espanol,
    fechanormal,
    ellipsis,
    pipekeys,
    safepipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    //NgbModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
	  HttpModule,



    routing
  ],
  providers: [
  DatePipe,
  appRoutingProviders,
  ServicesProvider

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
  ]

})
export class AppModule { }
