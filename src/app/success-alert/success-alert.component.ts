import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-success-alert', 
    templateUrl : './success-alert.component.html', 
    styleUrls : [ './success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

    message = "hello, i am the success alert component"; 
    
    constructor() {}

    ngOnInit() : void {

    }
}

