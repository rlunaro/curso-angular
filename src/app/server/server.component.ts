import { Component } from '@angular/core';

@Component({
  selector : 'app-server',
  templateUrl : './server.component.html',
  styles : [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {

    serverId : string = '10'; 
    serverStatus : string;

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
      if( this.serverStatus === 'online' )
        return 'green'; 
      else
        return 'red';
    }
}
