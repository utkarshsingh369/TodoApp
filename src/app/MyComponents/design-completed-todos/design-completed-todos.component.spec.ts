import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCompletedTodosComponent } from './design-completed-todos.component';

describe('DesignCompletedTodosComponent', () => {
  let component: DesignCompletedTodosComponent;
  let fixture: ComponentFixture<DesignCompletedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignCompletedTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignCompletedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
