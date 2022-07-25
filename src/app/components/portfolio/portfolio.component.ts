import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit() {
    this.getPortfolioUser();
  }

  getPortfolioUser(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.service.getUserBySlug(slug).subscribe((response) => {
      this.user = response;
    });
  }

  experienceTrackBy(index: number, experience: any) {
    return experience.id;
  }

  educationTrackBy(index: number, education: any) {
    return education.id;
  }

  skillTrackBy(index: number, skill: any) {
    return skill.id;
  }

  projectTrackBy(index: number, project: any) {
    return project.id;
  }
}
