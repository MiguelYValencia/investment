import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients = [
    {
      codigo: '1000',
      nombre: 'John Doe',
      tipoParticipe: 'natural',
      fechaCreacionString: '10 de marzo 2022',
      inversionPrincipal: 'USD',
      inversiones: {
        inversionTotal: "$ 400,000.00",
        saldoDisponible: "$ 101,640.59",
        rendimiento: "$ 2,532.28",
        posicionActual: "$ 504,172.87",
        inversiones: [
          {
            vigente: true,
            fondoProducto: "Perú Strategic Fund Dólares",
            rentabilidadAnual: "7.75% TEA",
            importe: "$ 100,000.00",
            fecha: "15 de Diciembre 2022"
          },
          {
            vigente: true,
            fondoProducto: "Mid Capital",
            rentabilidadAnual: "7.80% TEA",
            importe: "$ 50,000.00",
            fecha: "15 de Diciembre 2023"
          },
          {
            vigente: false,
            fondoProducto: "Mid Capital",
            rentabilidadAnual: "7.80% TEA",
            importe: "$ 10,000.00",
            fecha: "1 de Diciembre 2023"
          }
        ]
      }
    },
    { codigo: '1001', nombre: 'María López', tipoParticipe: 'mancomunado', fechaCreacionString: '15 de abril 2023', inversionPrincipal: 'PEN' },
    { codigo: '1002', nombre: 'Carlos García', tipoParticipe: 'natural', fechaCreacionString: '20 de mayo 2021', inversionPrincipal: 'USD' }
  ];

  @Output() selectClient = new EventEmitter<any>();

  onSelect(client: any) {
    this.selectClient.emit(client);
  }
}
