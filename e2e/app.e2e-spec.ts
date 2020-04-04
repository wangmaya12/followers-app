import { HelloMyappPage } from './app.po';

describe('hello-myapp App', () => {
  let page: HelloMyappPage;

  beforeEach(() => {
    page = new HelloMyappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
