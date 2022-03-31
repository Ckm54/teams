import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  @Input() team: string[] = []
  @Input() index:number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
