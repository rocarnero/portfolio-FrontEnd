import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-row',
  templateUrl: './experience-row.component.html',
  styleUrls: ['./experience-row.component.css'],
})
export class ExperienceRowComponent implements OnInit {
  @Input() experience: any;
  @Input() index: any;
  @Input() onDelete: any;
  @Input() onEdit: any;

  constructor() {}

  ngOnInit(): void {}
}
