import { TestBed } from '@angular/core/testing';
import { SeccionComponent } from './seccion.component';
describe('SeccionComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SeccionComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SeccionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=seccion.component.spec.js.map