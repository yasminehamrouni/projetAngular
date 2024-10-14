import { Component, Input, OnInit} from '@angular/core';
import { FaceSnap } from '../../models/face-snap-dsi3.model';
@Component({
  selector: 'app-face-snap-dsi23',
  standalone: true,
  templateUrl: './face-snap-dsi23.component.html',
  styleUrl: './face-snap-dsi23.component.css'
})
export class FaceSnapDSI23Component implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonText:string='Oh Snap';

  ngOnInit() {
    this.buttonText = "Oh Snap"
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    }
    else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }}}