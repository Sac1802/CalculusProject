import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootsPageComponent } from './shoots-page.component';

describe('ShootsPageComponent', () => {
  let component: ShootsPageComponent;
  let fixture: ComponentFixture<ShootsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShootsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShootsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
