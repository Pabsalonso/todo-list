import { Component, OnInit } from '@angular/core';
import { TareasService } from './tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  aMostrar = 'todos';
  lista = [];

  constructor(
    private tareasService: TareasService,
    private router: Router) {}

  ngOnInit() {
    this.lista = this.tareasService.getTasks(this.aMostrar);
  }

  ionViewWillEnter(){
    this.lista = this.tareasService.getTasks(this.aMostrar);
  }

  createTask(){
    this.router.navigate(['/newTask']);
  }

  //Funciones de ordenación
  sortByName(){
    this.lista.sort((a,b) => a.name.localeCompare(b.name));
  }

  sortByNameDesc(){
    this.lista.sort((a,b) => a.name.localeCompare(b.name));
    this.lista.reverse();
  }

  sortByDate(){
    this.lista.sort((a,b) => b.date - a.date);
  }

  sortByDateDesc(){
    this.lista.sort((a,b) => b.date - a.date);
    this.lista.reverse();
  }

  sortByState(){
    this.lista.sort((a,b) => a.estado.localeCompare(b.estado));
  }

  sortByStateDesc(){
    this.lista.sort((a,b) => a.estado.localeCompare(b.estado));
    this.lista.reverse();
  }

  show(){
    this.lista = this.tareasService.getTasks(this.aMostrar);
  }
}
