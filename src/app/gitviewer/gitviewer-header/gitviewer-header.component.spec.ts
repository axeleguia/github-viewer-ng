import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitviewerHeaderComponent } from './gitviewer-header.component';

describe('GitviewerHeaderComponent', () => {
  let component: GitviewerHeaderComponent;
  let fixture: ComponentFixture<GitviewerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitviewerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitviewerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
