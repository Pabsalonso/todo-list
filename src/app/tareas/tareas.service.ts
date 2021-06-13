import { Injectable } from '@angular/core';
import {Tarea} from './tarea-interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private lista: Tarea[] = [
    {
      id:'1',
      name:'Crear la todo List',
      date:new Date('2019-06-28'),
      description: 'Realizar el todo list para poder aprobar la asignatura',
      estado: '0'
    },
    {
      id:'2',
      name:'Comprobar que funciona bien',
      date:new Date('1999-06-28'),
      description: 'Terminar el todo list de manera que funcione correctamente',
      estado: '1'
    },
    {
      id:'3',
      name:'Testear los historicos',
      date:new Date('2020-06-28'),
      description: 'Terminar el todo list de manera que funcione correctamente',
      estado: '2'
    },{
      id:'4',
      name:'Testear los historicos',
      date:new Date(),
      description: 'Terminar el todo list de manera que funcione correctamente',
      estado: '2'
    },{
      id:'5',
      name:'Hacer bien el crear',
      date:new Date(),
      description: 'realizar bien el formato y comprobar que no deja vacios',
      estado: '1'
    },{
      id:'6',
      name:'hacer que cambie el color de las tarjetas en funcion del estado',
      date:new Date(),
      description: 'Terminar el todo list de manera que funcione correctamente',
      estado: '1'
    },{
      id:'7',
      name:'Poder ordenar',
      date:new Date(),
      description: 'Terminar el todo list de manera que funcione correctamente',
      estado: '1'
    }

  ];
  constructor() { }

  getTasks(tipo: string) {
    switch(tipo){
      case 'pendiente': return this.lista.filter(tarea => tarea.estado === '0');
      case 'progreso': return this.lista.filter(tarea => tarea.estado === '1');
      case 'todos': return this.lista.filter(tarea => tarea.estado !== '2');
    }
  }

  getCompleted(){
    return this.lista.filter(tarea => tarea.estado === '2');
  }

  getTask(id: string){
    return {
      ...this.lista.find(task => task.id === id)
    };
  }

  addTask(name: string, description: string ) {
    this.lista.push({
      id: this.lista.length +1 + '',
      name,
      date: new Date(),
      description,
      estado: '0',
    });
  }

  updateTask(id: string, estado: string){
    this.lista.find(task => task.id === id).estado = estado;
  }

  deleteTask(id: string){
    this.lista = this.lista.filter(tarea => tarea.id !== id);
  }

}
