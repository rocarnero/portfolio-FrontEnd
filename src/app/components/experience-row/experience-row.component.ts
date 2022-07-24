import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-row',
  templateUrl: './experience-row.component.html',
  styleUrls: ['./experience-row.component.css'],
})
export class ExperienceRowComponent implements OnInit {
  @Input() experience: any;

  constructor() {}

  ngOnInit(): void {}
}
