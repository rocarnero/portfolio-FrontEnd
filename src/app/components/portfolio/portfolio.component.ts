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
  modalLanguage: any = {};
  modalSkill: any = {};
  modalProject: any = {};
  modalEducation: any = {};
  modalExperience: any = {};
  modalInfo: any = {};

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

  updateUser(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.service.updateUserBySlug(slug, this.user).subscribe((response) => {
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

  languageTrackBy(index: number, language: any) {
    return language.id;
  }

  projectTrackBy(index: number, project: any) {
    return project.id;
  }

  // Language
  setModalLanguage(newModalLanguage: any) {
    this.modalLanguage = { ...newModalLanguage };
  }

  handleAddLanguage() {
    if (this.modalLanguage.id) {
      this.user.languages = this.user.languages.map((language: any) =>
        language.id === this.modalLanguage.id ? this.modalLanguage : language
      );
    } else {
      this.user.languages.push(this.modalLanguage);
    }
    this.modalLanguage = {};
  }

  handleDeleteLanguage = (languageIndex: any) => {
    this.user.languages.splice(languageIndex, 1);
  };

  handleEditLanguage = (editingLanguage: any) => {
    this.setModalLanguage(editingLanguage);
  };

  // Skill
  setModalSkill(newModalSkill: any) {
    this.modalSkill = { ...newModalSkill };
  }

  handleAddSkill() {
    if (this.modalSkill.id) {
      this.user.skills = this.user.skills.map((skill: any) =>
        skill.id === this.modalSkill.id ? this.modalSkill : skill
      );
    } else {
      this.user.skills.push(this.modalSkill);
    }
    this.modalSkill = {};
  }

  handleDeleteSkill = (skillIndex: any) => {
    this.user.skills.splice(skillIndex, 1);
  };

  handleEditSkill = (editingSkill: any) => {
    this.setModalSkill(editingSkill);
  };

  // Project
  setModalProject(newModalProject: any) {
    this.modalProject = { ...newModalProject };
  }

  handleAddProject() {
    if (this.modalProject.id) {
      this.user.projects = this.user.projects.map((project: any) =>
        project.id === this.modalProject.id ? this.modalProject : project
      );
    } else {
      this.user.projects.push(this.modalProject);
    }
    this.modalProject = {};
  }

  handleDeleteProject = (projectIndex: any) => {
    this.user.projects.splice(projectIndex, 1);
  };

  handleEditProject = (editingProject: any) => {
    this.setModalProject(editingProject);
  };

  // Experience
  setModalExperience(newModalExperience: any) {
    this.modalExperience = { ...newModalExperience };
  }

  handleAddExperience() {
    if (this.modalExperience.id) {
      this.user.experiences = this.user.experiences.map((experience: any) =>
        experience.id === this.modalExperience.id
          ? this.modalExperience
          : experience
      );
    } else {
      this.user.experiences.push(this.modalExperience);
    }
    this.modalExperience = {};
  }

  handleDeleteExperience = (experienceIndex: any) => {
    this.user.experiences.splice(experienceIndex, 1);
  };

  handleEditExperience = (editingExperience: any) => {
    this.setModalExperience(editingExperience);
  };

  // Education
  setModalEducation(newModalEducation: any) {
    this.modalEducation = { ...newModalEducation };
  }

  handleAddEducation() {
    if (this.modalEducation.id) {
      this.user.educations.map((education: any) =>
        education.id === this.modalEducation.id
          ? this.modalEducation
          : education
      );
    } else {
      this.user.educations.push(this.modalEducation);
    }
    this.modalEducation = {};
  }

  handleDeleteEducation = (educationIndex: any) => {
    this.user.educations.splice(educationIndex, 1);
  };

  handleEditEducation = (editingEducation: any) => {
    this.setModalEducation(editingEducation);
  };

  // Info

  setModalInfo(newModalInfo: any) {
    this.modalInfo = { ...newModalInfo };
  }

  handleSaveInfo = () => {
    this.user = { ...this.user, ...this.modalInfo };
  };
}
