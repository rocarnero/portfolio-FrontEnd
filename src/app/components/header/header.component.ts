import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() name!: string;
  username: string = '';
  password: string = '';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.username, this.password);
  }
}
