import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CalcModule } from './pages/calculadora/calc.module';
import { TabModule } from './pages/tabuadas/tab.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index';
import { TabComponent } from './pages/tabuadas/tab.component';
import { CalcComponent } from './pages/calculadora/calc.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'calculadora', component: CalcComponent },
  { path: 'tabuadas', component: TabComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CalcModule,
    TabModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    IndexComponent
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
