import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubprofileFollowersComponent } from './githubprofile-followers.component';

describe('GithubprofileFollowersComponent', () => {
  let component: GithubprofileFollowersComponent;
  let fixture: ComponentFixture<GithubprofileFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubprofileFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubprofileFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
