import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created";
  serverName: string = "";
  serverCreated: boolean = false;
  servers: string[] = ["Test Server", "Test Server 2", "Test Server 3"];

  constructor() {
      setTimeout(()=> {this.allowNewServer = true},2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreationStatus = `${this.serverName} Server was created`;
    this.serverCreated = true
  }

  // onUpdateServerName(event) {
  //   this.serverName = event.target.value
  // }
}
