import { CascadingDropDownPage } from './app.po';

describe('cascading-drop-down App', () => {
  let page: CascadingDropDownPage;

  beforeEach(() => {
    page = new CascadingDropDownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
