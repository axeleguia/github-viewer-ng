import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitviewerComponent } from './gitviewer.component';

describe('GitviewerComponent', () => {
  let component: GitviewerComponent;
  let fixture: ComponentFixture<GitviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
