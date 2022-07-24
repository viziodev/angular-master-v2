import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeByClientComponent } from './commande-by-client.component';

describe('CommandeByClientComponent', () => {
  let component: CommandeByClientComponent;
  let fixture: ComponentFixture<CommandeByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeByClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
