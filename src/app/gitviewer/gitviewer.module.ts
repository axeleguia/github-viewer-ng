import { NgModule } from '@angular/core';
import { GitviewerComponent } from './gitviewer.component';
import { GitviewerHeaderComponent } from './gitviewer-header/gitviewer-header.component';
import { GitviewerSidebarComponent } from './gitviewer-sidebar/gitviewer-sidebar.component';
import { GitviewerMainComponent } from './gitviewer-main/gitviewer-main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GitHubService } from './../../core/services/github.service';

@NgModule({
  declarations: [
    GitviewerComponent,
    GitviewerHeaderComponent,
    GitviewerSidebarComponent,
    GitviewerMainComponent,
  ],
  imports: [CommonModule, FormsModule],
  providers: [GitHubService],
  exports: [
    GitviewerComponent,
    GitviewerHeaderComponent,
    GitviewerSidebarComponent,
    GitviewerMainComponent,
  ],
})
export class GitviewerModule {}
