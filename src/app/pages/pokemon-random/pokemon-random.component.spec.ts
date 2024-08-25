import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRandomComponent } from './pokemon-random.component';

describe('PokemonRandomComponent', () => {
  let component: PokemonRandomComponent;
  let fixture: ComponentFixture<PokemonRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonRandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
