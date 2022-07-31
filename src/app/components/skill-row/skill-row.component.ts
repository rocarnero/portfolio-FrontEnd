import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.css'],
})
export class SkillRowComponent implements OnInit {
  @Input() skill: any;
  @Input() index: any;
  @Input() onDelete: any;
  @Input() onEdit: any;
  @Input() isLoggedIn: any;

  constructor() {}

  ngOnInit(): void {}
}
