import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
 import { MapComponent } from './map.component';
import { CamelizePipe } from 'ngx-pipes';
import { MapService } from './map.service';
 @NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3_Vxr6osBs5-9TXpj0Fjk8LgYEy3uKWo'
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule { }
