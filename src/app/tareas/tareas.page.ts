import { Component, OnInit } from '@angular/core';
import { TareasService } from './tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  lista = [];

  constructor(private tareasService: TareasService,
              private router: Router) {}

  ngOnInit() {
    this.lista = this.tareasService.getTasks();
  }

  goCreate(){
    this.router.navigate(['/tareas/tarea-create']);
  }

}
