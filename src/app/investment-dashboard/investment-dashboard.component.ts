import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-investment-dashboard',
  templateUrl: './investment-dashboard.component.html',
  styleUrls: ['./investment-dashboard.component.css']
})
export class InvestmentDashboardComponent {
  selectedClient: any = null;
  showDetails: boolean = false;
  isDesktop: boolean = window.innerWidth >= 768;

  onClientSelected(client: any) {
    this.selectedClient = client;
    this.showDetails = !this.isDesktop; // Oculta la lista en móviles
  }

  goBack() {
    this.selectedClient = null;
    this.showDetails = false; // Muestra la lista nuevamente
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const newIsDesktop = window.innerWidth >= 768;
    if (newIsDesktop !== this.isDesktop) {
      this.isDesktop = newIsDesktop;
      this.showDetails = this.isDesktop; // En escritorio siempre muestra los detalles
    }
  }
}
