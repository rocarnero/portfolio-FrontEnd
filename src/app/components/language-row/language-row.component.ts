import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-row',
  templateUrl: './language-row.component.html',
  styleUrls: ['./language-row.component.css'],
})
export class LanguageRowComponent implements OnInit {
  @Input() language: any;
  @Input() index: any;
  @Input() onDelete: any;
  @Input() onEdit: any;

  constructor() {}

  ngOnInit(): void {}
}
