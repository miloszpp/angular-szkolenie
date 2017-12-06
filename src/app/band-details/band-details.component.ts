import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { Band } from "../model";
import { ColorService } from "../color.service";
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BandDetailsComponent implements OnInit {

  @Input() band: Band;
  @Output() shift = new EventEmitter<string>();

  textTransform = "uppercase";
  color: string;
  colors: string[];

  constructor(
    private colorService: ColorService, 
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.colorService.getColors()
      .subscribe(
        colors => {
          this.colors = colors;
          this.color = colors[0];
          this.changeDetector.markForCheck();
        },
        error => alert(error)
      );
  }

  previous() {
    this.shift.emit("previous");
  }

  next() {
    this.shift.emit("next");
  }

  changeTransform() {
    if (this.textTransform === "uppercase") this.textTransform = "lowercase";
    else this.textTransform = "uppercase";
  }

  disableDetector() {
    this.changeDetector.detach();
  }

  enableDetector() {
    this.changeDetector.reattach();
  }

}
