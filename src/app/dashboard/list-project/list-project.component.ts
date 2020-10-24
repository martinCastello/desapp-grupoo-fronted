import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  //variable para la carga de un proyecto
  project = '';
  //list iria con la clase nuestra
  listProject: any[]=[];
  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(ps => this.listProject = ps);
  }
  //metodo para imprimir el proyecto
  addProject(){
   
    const project={
        name: this.project,
        finishProject:false

    };
    console.log(this.listProject);
    this.listProject.push(project);
    this.project='';
  };
  //aca pongo index:num , pero en el proyecto nuestro cada proyecto ya trae un id q lo identifica
  deleteProject( index :number ){
    this.listProject.splice(index,1);

  };
  updateProyect(project,index){
    this.listProject[index].finishProject =!project.finishProject;
  }
}
