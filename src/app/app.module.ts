import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './wrapper/navigation/navigation.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './wrapper/footer/footer.component';
import { MainComponent } from './main/main.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './projects/project/project.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { EducationComponent } from './resume/education/education.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { EducationCardComponent } from './resume/education/education-card/education-card.component';
import { ExperienceCardComponent } from './resume/experience/experience-card/experience-card.component';
import { SkillsCardComponent } from './resume/skills/skills-card/skills-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WrapperComponent,
    ContactComponent,
    ProjectsComponent,
    ResumeComponent,
    ProjectComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    EducationCardComponent,
    ExperienceCardComponent,
    SkillsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
