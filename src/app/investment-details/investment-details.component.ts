import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.css']
})
export class InvestmentDetailsComponent {
  @Input() selectedClient: {
    codigo: string;
    nombre: string;
    tipoParticipe: string;
    fechaCreacion: string;
    fechaCreacionString: string;
    inversionPrincipal: string;
    inversiones?: {
      inversionTotal: string;
      saldoDisponible: string;
      rendimiento: string;
      posicionActual: string;
      inversiones: {
        vigente: boolean;
        fondoProducto: string;
        rentabilidadAnual: string;
        importe: string;
        fecha: string;
      }[];
    };
  } | null = null;

  showConcluded: boolean = false; // Estado del switch para mostrar inversiones activas o concluidas
  isUSD: boolean = true; // Estado inicial de la moneda

  toggleCurrency(): void {
    this.isUSD = !this.isUSD; // Alternar estado de moneda
  }
}
