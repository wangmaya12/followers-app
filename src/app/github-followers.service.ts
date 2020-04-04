import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from 'services/data-services';

@Injectable()
export class GithubFollowersService extends DataService {
  constructor(http: Http) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
