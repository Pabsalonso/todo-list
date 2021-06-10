import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {TareasService} from '../tareas.service';
import {Router} from '@angular/router';

import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarea-create',
  templateUrl: './tarea-create.page.html',
  styleUrls: ['./tarea-create.page.scss'],
})

export class TareaCreatePage implements OnInit {
  name = '';
  description = '';

  constructor(
    private servicios: TareasService,
    private router: Router,
    private cd: ChangeDetectorRef) {}

  ngOnInit() {
  }

  createTarea(){
    if(this.name !== '' && this.description !== ''){
      this.servicios.addTask(this.name,this.description);
      this.router.navigate(['/tareas']);
    }
  }

}
