import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-row',
  templateUrl: './education-row.component.html',
  styleUrls: ['./education-row.component.css'],
})
export class EducationRowComponent implements OnInit {
  @Input() education: any;

  constructor() {}

  ngOnInit(): void {}
}
