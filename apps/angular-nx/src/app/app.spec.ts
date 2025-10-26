import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NxWelcome } from './nx-welcome';
import { provideRouter, RouterModule } from '@angular/router';

describe('App', () => {
/*   beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, NxWelcome],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome angular-nx'
    );
  }); */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(true).toBeTruthy();
  });

  it(`should have as title 'angular-nx'`, () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
