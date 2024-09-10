import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWhatsappComponent } from './btn-whatsapp.component';

describe('BtnWhatsappComponent', () => {
  let component: BtnWhatsappComponent;
  let fixture: ComponentFixture<BtnWhatsappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnWhatsappComponent]
    });
    fixture = TestBed.createComponent(BtnWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
