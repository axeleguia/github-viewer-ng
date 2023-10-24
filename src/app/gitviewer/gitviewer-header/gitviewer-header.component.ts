import { Component, OnInit } from '@angular/core';
import { GitHubService } from './../../../core/services/github.service';

@Component({
  selector: 'app-gitviewer-header',
  templateUrl: './gitviewer-header.component.html',
  styleUrls: ['./gitviewer-header.component.css'],
})
export class GitviewerHeaderComponent implements OnInit {
  owner!: string;
  token!: string;
  shouldDisplayApiKey: boolean = false;

  constructor(private githubService: GitHubService) {
    this.githubService.owner$.subscribe((res) => {
      this.owner = res;
    });
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('GITHUB_TOKEN') || '';
  }

  onTypeOwner(event: any) {
    this.githubService.setOwner(event.target.value);
  }
  onTypeApiKey(event: any) {
    localStorage.setItem('GITHUB_TOKEN', event.target.value);
  }
}
