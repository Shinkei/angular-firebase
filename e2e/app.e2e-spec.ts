import { AngularFirebasePage } from './app.po';

describe('angular-firebase App', () => {
  let page: AngularFirebasePage;

  beforeEach(() => {
    page = new AngularFirebasePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
