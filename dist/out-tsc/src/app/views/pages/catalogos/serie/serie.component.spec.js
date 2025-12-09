import { TestBed } from '@angular/core/testing';
import { SerieComponent } from './serie.component';
describe('SerieComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SerieComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SerieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=serie.component.spec.js.map