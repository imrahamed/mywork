import { CoPage } from './app.po';

describe('co App', function() {
  let page: CoPage;

  beforeEach(() => {
    page = new CoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
