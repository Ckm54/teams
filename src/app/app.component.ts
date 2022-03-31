import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName:string = "";
  members:string[] = [];
  errorMessage = '';
  numberOfTeams:number | "" = "";
  teams:string[][] = [];

  onInput(member: string) {
    this.newMemberName = member;
  }

  onInputNumberOfTeams(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember(){

    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty"
      return;
    }
    this.errorMessage = "";
    this.members.push(this.newMemberName)
    this.newMemberName = "";
  }

  generateTeams() {

    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid number of teams"
      return
    } else if (this.members.length < this.numberOfTeams){
      this.errorMessage = "Not enough members to create team"
      this.numberOfTeams = '';
      return
    }else {
      this.errorMessage = ""
      const allMembersList = [...this.members]

      while(allMembersList.length) {
        for(let i = 0; i < this.numberOfTeams; i++){
          const randomIndex = Math.floor(Math.random() * allMembersList.length)
          const member = allMembersList.splice(randomIndex, 1)[0];
          if (!member) break;
          if(this.teams[i]){
            this.teams[i].push(member)
          }else {
            this.teams[i] = [member]
          }
        }
      }
    }
    this.members = []
    this.numberOfTeams = '';
    console.log(this.teams)
  }
}
