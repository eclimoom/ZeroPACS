import { Component, OnInit } from '@angular/core';
import {SortEvent} from "../../../../shared/directives/advanced-sortable.directive";

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.scss']
})
export class StudyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSort({ column, direction }: any) {
    console.log("column, direction", column, direction)
  }
}
