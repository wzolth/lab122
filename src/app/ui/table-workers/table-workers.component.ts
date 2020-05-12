import { Component, OnInit, Input, Output, EventEmitter, Type } from '@angular/core';
import { MyWorker} from 'src/app/shared/worker.model';
//import { worker } from 'cluster';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit {
  @Input() title: string;
  @Input() workers: MyWorker[] = [];

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() changeWorker = new EventEmitter<MyWorker>();
  
  

  //export class AddformWorkerComponent implements OnInit {
    
    _workers : MyWorker;
    name: string;
    surname: string;
    type = 0;
  constructor() {}

  ngOnInit(): void {}



  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

 
  onChangeWorker1(worker){
    console.log(worker.name)
    this.changeWorker.emit(worker)
    
    
  }
  
}

