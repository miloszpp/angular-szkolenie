import { TestBed, ComponentFixture } from "@angular/core/testing";
import { BandListComponent } from "./band-list.component";
import { FormsModule } from "@angular/forms";
import { BandDetailsComponent } from "../band-details/band-details.component";
import { BandDetailsPhotoComponent } from "../band-details-photo/band-details-photo.component";
import { BandService } from "../band.service";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Band } from "../model";
import { By } from "@angular/platform-browser";
import { ColorService } from "../color.service";

describe('BandListComponent', () => {

    let fixture: ComponentFixture<BandListComponent>;
    let component: BandListComponent;

    // testowa lista zespołów
    const bands: Band[] = [
        { 
            name: "Zespół 1", 
            bio: "Biografia zespołu 1", 
            genres: [ "rock" ], 
            links: { photoUrl: "http://example.com", wikipediaUrl: "http://example.com" },
            members: []
        },
        { 
            name: "Zespół 2", 
            bio: "Biografia zespołu 2", 
            genres: [ "pop" ], 
            links: { photoUrl: "http://example.com", wikipediaUrl: "http://example.com" },
            members: []
        },
    ];

    // zaślepki dla usług 
    const bandServiceStub = {
        getBands: () => of(bands)
    };
    const colorServiceStub = {
        getColors: () => of([])
    };

    beforeEach(() => {
        // testowany komponent potrzebuje modułu; konfigurujemy tutaj moduł testowy
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ 
                BandListComponent,
                BandDetailsComponent,
                BandDetailsPhotoComponent,
            ],
            providers: [
                // uzywamy zaslepek zamiast wlasciwych uslug
                { provide: BandService, useValue: bandServiceStub },
                { provide: ColorService, useValue: colorServiceStub },
            ]
        });
        fixture = TestBed.createComponent(BandListComponent);
        component = fixture.componentInstance;
        // wlaczamy automatyczne wykrywanie zmian
        fixture.autoDetectChanges();
    });

    it("should show three options in band select", () => {
        const options = fixture.debugElement.queryAll(By.css("select>option"));
        expect(options.length).toBe(3);
    });

    it("should select next band on shift", () => {
        component.band = bands[0];
        component.shiftBand("next");
        expect(bands.indexOf(component.band)).toBe(1);
    });

    it("should not select next band on shift when last band selected", () => {
        component.band = bands[1];
        component.shiftBand("next");
        expect(bands.indexOf(component.band)).toBe(1);
    });

});