import { Component } from '@angular/core';

@Component({
  selector : 'app-server',
  templateUrl : './server.component.html'
})
export class ServerComponent {

    serverId : string = '10'; 
    serverStatus : number = 0 /* offline */;

    getServerStatus(){
        return this.serverStatus;
    }

}
