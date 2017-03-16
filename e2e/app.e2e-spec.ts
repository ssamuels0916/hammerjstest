import { HammerTimePage } from './app.po';

describe('hammer-time App', () => {
  let page: HammerTimePage;

  beforeEach(() => {
    page = new HammerTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
