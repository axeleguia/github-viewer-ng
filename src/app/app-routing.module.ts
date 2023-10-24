import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitviewerComponent } from './gitviewer/gitviewer.component';

const routes: Routes = [{ component: GitviewerComponent, path: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
