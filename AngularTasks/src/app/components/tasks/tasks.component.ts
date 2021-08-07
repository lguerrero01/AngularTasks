import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/models/task';
import {setData, getData} from '../common'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  listaTareas: task[] = [];
  nombreTarea = '';
  constructor() {  
 
  }
  
 
  ngOnInit(): void {
    
  }
  
  agregarTarea():void {
    const tarea: task = {
      nombre: this.nombreTarea,
      estado: false
    }
    
    if (this.nombreTarea !== '') {
      
      this.listaTareas = [...this.listaTareas , tarea ];
      localStorage.setItem("listaTareas", JSON.stringify(this.listaTareas));
      this.nombreTarea = '';
    }
    
  }
  eliminarTarea(index: number):void {
    this.listaTareas.splice(index,1)
  }

  actualizarTarea(tarea: task, index: number): void {
    this.listaTareas[index].estado = !tarea.estado;
  }

}
