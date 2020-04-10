import { MyAppErrorHandler } from "./../common/app-error-handle";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { GithubFollowersService } from "./github-followers.service";
import { PostsComponent } from "./posts/posts.component";
import { PostsService } from "./posts.service";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { GithubprofileFollowersComponent } from "./githubprofile-followers/githubprofile-followers.component";
import { ArchivesComponent } from "./archives/archives.component";
import { Home1Component } from "./home1/home1.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
    PostsComponent,
    HomeComponent,
    GithubprofileFollowersComponent,
    NotfoundComponent,
    ArchivesComponent,
    Home1Component,
    SignupFormComponent,
    ChangepasswordComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: SignupFormComponent },
      { path: "followers", component: GithubFollowersComponent },
      {
        path: "profile/:id/:login-name",
        component: GithubprofileFollowersComponent,
      },
      { path: "posts", component: PostsComponent },
      { path: "home", component: Home1Component },
      { path: "nav", component: NavComponent },
      { path: "archives/:year/:month", component: ArchivesComponent },
      { path: "changepassword", component: ChangepasswordComponent },
      // { path: "**", component: NotfoundComponent }
    ]),
  ],
  providers: [
    GithubFollowersService,
    PostsService,
    { provide: ErrorHandler, useClass: MyAppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
