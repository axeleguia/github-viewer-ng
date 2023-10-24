import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';
import { Repository } from './../../../core/interfaces/repository';
import { Pagination, Response } from './../../../core/interfaces/response';
import { GitHubService } from './../../../core/services/github.service';

@Component({
  selector: 'app-gitviewer-sidebar',
  templateUrl: './gitviewer-sidebar.component.html',
  styleUrls: ['./gitviewer-sidebar.component.css'],
})
export class GitviewerSidebarComponent implements OnInit {
  owner!: string;
  repository!: string;
  selectedRepository: string | undefined;
  repositoriesTmp: Repository[] = [];
  pagination!: Pagination;
  repositories!: Repository[];
  currentPage = 1;
  perPage = 10;

  constructor(private gitHubService: GitHubService) {}

  ngOnInit(): void {
    this.gitHubService.owner$
      .pipe(
        distinctUntilChanged(),
        debounceTime(600),
        tap((owner) => {
          this.owner = owner;
          if (owner) {
            this.getRepos(owner, this.currentPage, this.perPage);
          } else {
            this.clean();
          }
        })
      )
      .subscribe();
  }

  getRepos(owner: string, page: number, perPage: number) {
    this.gitHubService
      .getRepos(owner, page, perPage)
      .pipe(
        map((res: Response<Repository[]>) => {
          this.repositories = res.data;
          this.pagination = res.pagination;
          this.repositoriesTmp = this.repositories;
        })
      )
      .subscribe();
  }

  filterRepoByName() {
    this.repositoriesTmp = this.repositories?.filter(
      (r) => r.name.indexOf(this.repository) > -1
    );
  }

  onSelectRepository(value: string) {
    this.selectedRepository = value;
    this.gitHubService.setRepository(value);
  }

  clean() {
    this.currentPage = 1;
    this.repositories = [];
    this.pagination = {
      prev: null,
      next: null,
      first: null,
      last: null,
    };
    this.repositoriesTmp = this.repositories;
  }
}
