import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  soundEnabled: boolean = true;

  toggleSound(){
    
    this.soundEnabled = !this.soundEnabled;
  }
}
