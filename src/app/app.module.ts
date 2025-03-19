import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InvestmentDashboardComponent } from './investment-dashboard/investment-dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component'; // Importa
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentDashboardComponent,
    ClientListComponent,
    InvestmentDetailsComponent // Agrega aquí
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
