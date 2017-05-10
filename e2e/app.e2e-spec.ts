import { NgBootTestPage } from './app.po';

describe('ng-boot-test App', () => {
  let page: NgBootTestPage;

  beforeEach(() => {
    page = new NgBootTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
