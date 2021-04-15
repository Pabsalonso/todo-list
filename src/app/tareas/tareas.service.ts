import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private lista = [
    {
      tareaId:1,
      name:'tarea1',
      descripcion: 'realizar el todo list'
    },
    {
      tareaId:2,
      name:'test',
      descripcion: 'terminar el todo list'
    }
  ];
  constructor() { }

  getTasks() {
    return [...this.lista];
  }

  getTask(){

  }

  addTask() {

  }

  deleteTasks(){

  }
}
