import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisTerComponent } from './regis-ter.component';

describe('RegisTerComponent', () => {
  let component: RegisTerComponent;
  let fixture: ComponentFixture<RegisTerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisTerComponent]
    });
    fixture = TestBed.createComponent(RegisTerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
