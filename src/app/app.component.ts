import { Component } from '@angular/core';
import { ListaComponent } from './productos/lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaboratorioDW';
  listaArray: ListaComponent[] = [
    {id: 1, nombre: "Laptop", cantidad: '5', compraRealizada:false},
    {id: 2, nombre: "Smartphone", cantidad: '10', compraRealizada:false},
    {id: 3, nombre: "Tablet", cantidad: '7', compraRealizada:false},
    {id: 4, nombre: "Auriculares", cantidad: '1', compraRealizada:false},
    {id: 5, nombre: "Monitor", cantidad: '8', compraRealizada:false},
    {id: 6, nombre: "Teclado", cantidad: '7', compraRealizada:false},
    {id: 7, nombre: "Mouse", cantidad: '14', compraRealizada:false},
    {id: 8, nombre: "Impresora", cantidad: '22', compraRealizada:false},
    {id: 9, nombre: "Router", cantidad: '13', compraRealizada:false},
    {id: 10, nombre: "Cámara", cantidad: '8', compraRealizada:false},
  ];

  selectedLista: ListaComponent = new ListaComponent();
  isEditMode: boolean = false;

  openForEdit(item: ListaComponent) {
    if (!item.compraRealizada) {
      this.selectedLista = item;
      this.isEditMode = true; // Activar el modo de edición si no está bloqueado
    }
  }

  saveItem() {
    if (this.isEditMode) {
      // Lógica para editar un elemento
      const index = this.listaArray.findIndex((item) => item.id === this.selectedLista.id);
      if (index !== -1) {
        this.listaArray[index] = { ...this.selectedLista };
      }
      this.selectedLista = new ListaComponent();
      this.isEditMode = false; // Salir del modo de edición
    } else {
      // Lógica para agregar un nuevo elemento
      this.selectedLista.id = this.listaArray.length + 1;
      this.listaArray.push({ ...this.selectedLista });
      this.selectedLista = new ListaComponent(); // Limpiar el formulario después de agregar
    }
  }

  cancelEdit() {
    this.selectedLista = new ListaComponent();
    this.isEditMode = false; // Salir del modo de edición sin guardar cambios
  }

  deleteItem(item: ListaComponent) {
    if (!item.compraRealizada) {
      const index = this.listaArray.findIndex((element) => element === item);
      if (index !== -1) {
        this.listaArray.splice(index, 1);
      }
    }
    this.selectedLista = new ListaComponent();
    this.isEditMode = false; // Salir del modo de edición después de eliminar
  }
}
