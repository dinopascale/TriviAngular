import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLayerComponent } from './modal-layer.component';

describe('ModalLayerComponent', () => {
  let component: ModalLayerComponent;
  let fixture: ComponentFixture<ModalLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
