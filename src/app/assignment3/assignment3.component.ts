import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  public mySecretPassword = 'super-super-secret-password';
  public secretPasswordIsVisible = false;
  public numberOfClicks = 0;
  public toggleHistory = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  public toggleSecretPassword(){
    this.secretPasswordIsVisible = !this.secretPasswordIsVisible;
    this.numberOfClicks++;
    this.toggleHistory.push( new Date() );
  }



}
