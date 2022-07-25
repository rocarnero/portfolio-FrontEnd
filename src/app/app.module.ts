import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlockComponent } from './components/block/block.component';
import { EducationRowComponent } from './components/education-row/education-row.component';
import { ExperienceRowComponent } from './components/experience-row/experience-row.component';
import { SkillRowComponent } from './components/skill-row/skill-row.component';
import { ProjectRowComponent } from './components/project-row/project-row.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlockComponent,
    EducationRowComponent,
    ExperienceRowComponent,
    SkillRowComponent,
    ProjectRowComponent,
    AboutComponent,
    PortfolioComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
