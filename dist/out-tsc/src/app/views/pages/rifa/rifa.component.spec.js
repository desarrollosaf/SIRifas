import { TestBed } from '@angular/core/testing';
import { RifaComponent } from './rifa.component';
describe('RifaComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RifaComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(RifaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rifa.component.spec.js.map