import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTutoriasComponent } from './registro-tutorias.component';

describe('RegistroTutoriasComponent', () => {
  let component: RegistroTutoriasComponent;
  let fixture: ComponentFixture<RegistroTutoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroTutoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroTutoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
