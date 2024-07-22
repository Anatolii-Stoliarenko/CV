import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
