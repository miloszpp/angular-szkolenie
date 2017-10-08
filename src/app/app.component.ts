import { Component } from '@angular/core';
import { Band } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  bands: Band[] = [
    {
      name: "Metallica",
      bio: "Amerykański zespół heavymetalowy założony w Los Angeles w 1981 roku przez Jamesa Hetfielda i Larsa Ulricha.",
      links: {
        wikipediaUrl: "https://pl.wikipedia.org/wiki/Metallica",
        photoUrl: "https://up-1.cdn-fullscreendirect.com/production/photos/7549/large/20161022_184841_7549_958066.jpeg"
      },
      genres: ["rock", "metal"],
      members: ["James Hetfield", "Lars Urlich", "Kirk Hammett", "Robert Trujillo"]
    },
    {
      name: "Slayer",
      bio: "Amerykańska grupa muzyczna wykonująca thrash metal, powstała w 1981 roku w Huntington Park (przedmieścia Los Angeles).",
      links: {
        wikipediaUrl: "https://pl.wikipedia.org/wiki/Slayer",
        photoUrl: "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Slayer-Band-Images-HD-PIC-WPD005087.jpg"
      },
      genres: ["thrash metal"],
      members: ["Kerry King", "Tom Arraya", "Paul Bostaph", "Gary Hott"]
    },
    {
      name: "Kombi",
      bio: "Polski zespół muzyczny, założony w 1969 roku przez Sławomira Łosowskiego, występujący początkowo pod nazwą Akcenty, a po jej zmianie w 1976 roku jako Kombi.",
      links: {
        wikipediaUrl: "https://pl.wikipedia.org/wiki/Kombi_(zesp%C3%B3%C5%82_muzyczny)",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%22Kombi%22.JPG/1280px-%22Kombi%22.JPG"
      },
      genres: ["pop", "rock"],
      members: ["Sławomir Łosowski", "Tomasz Łosowski", "Zbigniew Fil", "Karol Kozłowski"]
    },
  ];

  band: Band = this.bands[0];

  textTransform = "uppercase"
  color = "red"

  changeTransform() {
    if (this.textTransform === "uppercase") this.textTransform = "lowercase";
    else this.textTransform = "uppercase";
  }

  changeColor() {
    if (this.color === "red") this.color = "blue";
    else this.color = "red";
  }
}
