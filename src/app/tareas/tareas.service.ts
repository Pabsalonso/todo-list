import { Injectable } from '@angular/core';
import {Tarea} from './tarea-interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private lista: Tarea[] = [
    {
      id:'1',
      name:'tarea1',
      description: 'realizar el todo list'
    },
    {
      id:'2',
      name:'test',
      description: 'terminar el todo list'
    }
  ];
  constructor() { }

  getTasks() {
    return [...this.lista];
  }

  getTask(id: string){
    return {
      ...this.lista.find(task => task.id === id)
    };
  }

  addTask(tarea: Tarea) {
    this.lista.push(tarea);
  }

  deleteTasks(){

  }
}
