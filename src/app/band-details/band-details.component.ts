import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Band } from "../model";

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styles: []
})
export class BandDetailsComponent {

  @Input() band: Band;
  @Output() shift = new EventEmitter<string>();

  textTransform = "uppercase"
  color = "red"

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

  changeColor() {
    if (this.color === "red") this.color = "blue";
    else this.color = "red";
  }

}
