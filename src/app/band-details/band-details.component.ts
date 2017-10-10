import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Band } from "../model";
import { ColorService } from "../color.service";

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styles: []
})
export class BandDetailsComponent implements OnInit {

  @Input() band: Band;
  @Output() shift = new EventEmitter<string>();

  textTransform = "uppercase"
  color: string
  colors: string[]

  constructor(private colorService: ColorService) {
  }

  ngOnInit(): void {
    this.colorService
      .getColors()
      .then(colors => {
        this.colors = colors;
        this.color = colors[0];
      })
      .catch(error => alert(error));
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

}
