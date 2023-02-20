import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignActiveTodosComponent } from './design-active-todos.component';

describe('DesignActiveTodosComponent', () => {
  let component: DesignActiveTodosComponent;
  let fixture: ComponentFixture<DesignActiveTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignActiveTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignActiveTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
