import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
  selector: "app-archives",
  templateUrl: "./archives.component.html",
  styleUrls: ["./archives.component.css"],
})
export class ArchivesComponent implements OnInit {
  y: number;
  month: number;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const m = this.route.snapshot.paramMap;
    this.y = +m.get("year");
    this.month = +m.get("month");
  }
  getView() {
    this.router.navigate(["/home"]);
  }
}
