import { Component, OnInit } from '@angular/core';
import { BandLinks, Band } from '../model';
import { BandService } from '../band.service';

@Component({
  selector: 'app-band-add',
  templateUrl: './band-add.component.html',
  styles: []
})
export class BandAddComponent {

  constructor(private bandDataService: BandService) { }

  createBand(formModel: CreateBandFormModel) {
    // otrzymalismy model formularza, musimy na jego podstawie utworzyć prawdziwy obiekt Band
    const band: Band = {
      name: formModel.name, // na ogół jest to przepisywanie pól
      bio: formModel.bio,
      links: formModel.links,
      genres: formModel.genres,
      members: formModel.members.split(';') // ale czasami mogą zajść jakieś transformacje
    };
    this.bandDataService.createBand(band)
      .subscribe(
        () => { alert('Zespoł utworzony!'); },
        error => { alert('Wystąpił błąd podczas dodawania zespołu'); }
      );
      
  }

}

/**
 * Interfejs ten reprezentuje nasz formularz. Jego struktura powinna być identyczna ze strukturą
 * formularza (którą modelujemy za pomocą ngModel oraz ngModelGroup). Nie musimy eksportować tego
 * interfejsu poniewaz uzywamy go tylko w jednym miejscu.
 */
interface CreateBandFormModel {
  name: string;
  bio: string;
  members: string;
  links: BandLinks;
  genres: string[];
}