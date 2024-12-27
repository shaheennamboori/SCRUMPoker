import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  imports: [],
  templateUrl: './welcome-screen.component.html',
  styleUrl: './welcome-screen.component.scss'
})
export class WelcomeScreenComponent {
  constructor(private _router:Router){}
public createRoom(): void {
  this._router.navigate(['/create']);
}

public joinClicked(): void {
  this._router.navigate(['/rooms'])
}
}
