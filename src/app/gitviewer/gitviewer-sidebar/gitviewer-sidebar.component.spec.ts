import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitviewerSidebarComponent } from './gitviewer-sidebar.component';

describe('GitviewerSidebarComponent', () => {
  let component: GitviewerSidebarComponent;
  let fixture: ComponentFixture<GitviewerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitviewerSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitviewerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
