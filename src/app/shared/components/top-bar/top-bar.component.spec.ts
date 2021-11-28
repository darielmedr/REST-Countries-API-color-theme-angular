import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';

import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TopBarComponent,
        ...MockComponents(
          MatToolbar,
          MatIcon
        )
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should set class 'dark-mode' in document.body onInit()", () => {
    const className = 'dark-mode';
    component.ngOnInit();
    expect(document.body.classList.contains(className)).toBeTrue();
  });

  describe("#toggleDarkMode()", () => {
    it("should toggle #isDarkMode value", () => {
      component.isDarkMode = true;

      component.toggleDarkMode();
      expect(component.isDarkMode).toBeFalse();

      component.toggleDarkMode();
      expect(component.isDarkMode).toBeTrue();
    });

    it("should toggle class 'dark-mode' in document.body", () => {
      const className = 'dark-mode';
      document.body.classList.add(className);

      component.toggleDarkMode();
      expect(document.body.classList.contains(className)).toBeFalse();

      component.toggleDarkMode();
      expect(document.body.classList.contains(className)).toBeTrue();
    });
  });

  it("should call #toggleDarkMode() when click <a.switch-btn>", () => {
    let btnElement = fixture.debugElement.query(By.css('a.switch-btn'));
    const spy = spyOn(component, "toggleDarkMode");

    btnElement.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });
});
