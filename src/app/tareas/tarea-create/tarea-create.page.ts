import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Tarea } from '../tarea-interface';
import {TareasService} from '../tareas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarea-create',
  templateUrl: './tarea-create.page.html',
  styleUrls: ['./tarea-create.page.scss'],
})
export class TareaCreatePage implements OnInit {
  public aCrear: Tarea = {
    id:'3',
    name:'',
    description: ''
  };

  constructor(private servicios: TareasService,
    private router: Router,
    private cd: ChangeDetectorRef) {  }

  ngOnInit() {
  }

  createTarea(){
    console.log(this.aCrear);
    this.servicios.addTask(this.aCrear);
    console.log(this.servicios.getTasks());
    this.router.navigate(['../']);
    this.cd.detectChanges();
  }

}
