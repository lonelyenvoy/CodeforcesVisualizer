import { CodeforcesVisualizerPage } from './app.po';

describe('codeforces-visualizer App', function() {
  let page: CodeforcesVisualizerPage;

  beforeEach(() => {
    page = new CodeforcesVisualizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
