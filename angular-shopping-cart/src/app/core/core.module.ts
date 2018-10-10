import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AppMaterialModule } from '../shared/app-material.module';
import { MainComponent } from './containers/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AppMaterialModule
  ],
  declarations: [HeaderComponent, MainComponent]
})
export class CoreModule { }
