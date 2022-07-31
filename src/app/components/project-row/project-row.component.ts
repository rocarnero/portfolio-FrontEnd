import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.css'],
})
export class ProjectRowComponent implements OnInit {
  @Input() project: any;
  @Input() index: any;
  @Input() onDelete: any;
  @Input() onEdit: any;
  @Input() isLoggedIn: any;

  constructor() {}

  ngOnInit(): void {}
}
