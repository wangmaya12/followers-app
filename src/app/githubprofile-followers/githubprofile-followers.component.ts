import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githubprofile-followers',
  templateUrl: './githubprofile-followers.component.html',
  styleUrls: ['./githubprofile-followers.component.css']
})
export class GithubprofileFollowersComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      const pid = +p.get('id');
      console.log(pid);
    });
  }
}
