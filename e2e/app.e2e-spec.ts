import { Angular4ClientPage } from './app.po';

describe('cvonline App', () => {
  let page: Angular4ClientPage;

  beforeEach(() => {
    page = new Angular4ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
