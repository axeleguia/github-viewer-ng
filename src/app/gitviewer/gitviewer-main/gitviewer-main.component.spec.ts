import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitviewerMainComponent } from './gitviewer-main.component';

describe('GitviewerMainComponent', () => {
  let component: GitviewerMainComponent;
  let fixture: ComponentFixture<GitviewerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitviewerMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitviewerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
