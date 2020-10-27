import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `<app-server></app-server>
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No sever created';
  serverName = 'test';
  serverCreated = false;
  servers = ['testserver 1', 'testserver 2'];
  constructor() {
    setTimeout(()=>{this.allowNewServer=true;},3000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created name is ' + this.serverName;
  }

  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
