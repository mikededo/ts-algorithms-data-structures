import {
  CssDependency,
  DependencyTypeCount,
  FileBundle,
  HTMLDependency,
  JavascriptDependency,
} from './composite';

describe('Composite', () => {
  it('should be composed of one dependency of each', () => {
    const js = new JavascriptDependency(150);
    const css = new CssDependency(100);
    const html = new HTMLDependency();

    const bundle = new FileBundle();
    bundle.addDependency(js);
    bundle.addDependency(css);
    bundle.addDependency(html);

    expect(bundle.bundleSize).toBe(js.size + css.size + html.size);
    expect(bundle.typeCount).toStrictEqual({
      css: 1,
      html: 1,
      js: 1,
    } as DependencyTypeCount);
  });

  it('should be composed of multiple dependencies of each', () => {
    const js = new JavascriptDependency(150);
    const css = new CssDependency(100);
    const html = new HTMLDependency();

    const bundle = new FileBundle();

    bundle.addDependency(js);
    bundle.addDependency(js);
    bundle.addDependency(js);

    bundle.addDependency(css);
    bundle.addDependency(css);
    
    bundle.addDependency(html);

    expect(bundle.bundleSize).toBe(js.size * 3 + css.size * 2 + html.size);
    expect(bundle.typeCount).toStrictEqual({
      css: 2,
      html: 1,
      js: 3,
    } as DependencyTypeCount);
  });
});
