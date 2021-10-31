import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent } from './nav.component';

const routes: Routes = [
  {path: 'path1', component: HelloComponent},
  {path: 'path2', component: HelloComponent},
  {path: 'path3', component: HelloComponent},
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,          
  RouterModule.forRoot(routes),
  ],
  declarations: [ AppComponent, HelloComponent, NavComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
