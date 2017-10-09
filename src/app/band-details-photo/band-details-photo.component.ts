import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-band-details-photo',
  template: `
<label><input type="checkbox" [(ngModel)]="showPhoto" />Pokaż zdjęcie</label><br />
<img *ngIf="showPhoto" [src]="photoUrl" width="300" />
  `,
  styles: []
})
export class BandDetailsPhotoComponent {
  @Input() photoUrl: string;
}
