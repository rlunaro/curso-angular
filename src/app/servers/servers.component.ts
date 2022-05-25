import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer : boolean = true; 
  serverCreationStatus : string = 'No server was created';
  username : string;
  serverName : string = 'Server1';
  serverCreated : boolean = false;
  public servers = ['Test server1', 'Test server2'];


  constructor() { 
  }

  ngOnInit(): void {
  }

  onCreateServer() : boolean {
    this.serverCreationStatus = 'A server was created';
    console.log('onCreateServer was called');
    this.servers.push( this.serverName );
    this.serverCreated = true;
    return true;
  }

  onUpdateServerName( event : any ): void {
    this.serverName = event.target.value;
    console.log('onUpdateServerName was called');
  }

  onAddUser( ) : void {
    console.log( `valor de username antes: ${this.username}` );
    this.username = '';
    console.log( `valor de username despues: ${this.username}` );
  }
}



