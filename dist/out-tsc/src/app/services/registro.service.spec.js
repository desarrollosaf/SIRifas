import { TestBed } from '@angular/core/testing';
import { RegistroService } from './registro.service';
describe('RegistroService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RegistroService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=registro.service.spec.js.map