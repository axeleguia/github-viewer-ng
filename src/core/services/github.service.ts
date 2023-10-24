import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { Commit } from '../interfaces/commit';
import { Repository } from '../interfaces/repository';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private _ownerSubject = new BehaviorSubject<string>('');
  owner$ = this._ownerSubject.asObservable();
  private _repositorySubject = new BehaviorSubject<string>('');
  repository$ = this._repositorySubject.asObservable();

  setOwner(value: string) {
    this._ownerSubject.next(value);
  }

  setRepository(value: string) {
    this._repositorySubject.next(value);
  }

  constructor(private http: HttpClient) {}

  getRepos(
    owner: string,
    page: number,
    perPage: number
  ): Observable<Response<Repository[]>> {
    return this.http
      .get<Response<Repository[]>>(
        `http://localhost:3000/github/repos/${owner}?page=${page}&perPage=${perPage}`
      )
      .pipe(shareReplay(1));
  }

  getRepoCommits(
    owner: string,
    repository: string,
    page: number,
    perPage: number
  ): Observable<Response<Commit[]>> {
    return this.http
      .get<any>(
        `http://localhost:3000/github/repos/${owner}/${repository}?page=${page}&perPage=${perPage}`
      )
      .pipe(shareReplay(1));
  }
}
