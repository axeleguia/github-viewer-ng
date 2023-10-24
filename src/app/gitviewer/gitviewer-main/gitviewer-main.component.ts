import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, map, tap } from 'rxjs';
import { Commit } from './../../../core/interfaces/commit';
import { Pagination, Response } from './../../../core/interfaces/response';
import { GitHubService } from './../../../core/services/github.service';

@Component({
  selector: 'app-gitviewer-main',
  templateUrl: './gitviewer-main.component.html',
  styleUrls: ['./gitviewer-main.component.css'],
})
export class GitviewerMainComponent implements OnInit {
  owner!: string;
  repository!: string;
  commits!: Commit[];
  selectedCommit!: string;
  pagination!: Pagination;
  currentPage = 1;
  perPage = 10;

  constructor(private gitHubService: GitHubService) {}

  ngOnInit(): void {
    this.gitHubService.owner$
      .pipe(
        tap((owner) => {
          this.owner = owner;
          this.clean();
        })
      )
      .subscribe();
    this.gitHubService.repository$
      .pipe(
        distinctUntilChanged(),
        tap((repository) => (this.repository = repository)),
        map((repository) => {
          if (repository) {
            this.getRepoCommits(
              this.owner,
              repository,
              this.currentPage,
              this.perPage
            );
          } else {
            this.clean();
          }
        })
      )
      .subscribe();
  }

  getRepoCommits(
    owner: string,
    repository: string,
    page: number,
    perPage: number
  ) {
    this.gitHubService
      .getRepoCommits(owner, repository, page, perPage)
      .pipe(
        map((res: Response<Commit[]>) => {
          this.commits = res.data;
          this.pagination = res.pagination;
        })
      )
      .subscribe();
  }

  copyToClipboard(commit: string) {
    navigator.clipboard.writeText(commit);
  }

  clean() {
    this.currentPage = 1;
    this.commits = [];
    this.pagination = {
      prev: null,
      next: null,
      first: null,
      last: null,
    };
  }
}
