import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.page.html',
  styleUrls: ['./tarea-detail.page.scss'],
})
export class TareaDetailPage implements OnInit {
  tarea = {};
  constructor(private activatedRoute: ActivatedRoute,
              private tareasService: TareasService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('tareaId');
      this.tarea= this.tareasService.getTask(id);
      console.log(this.tarea);
    });
  }

}
