export type DependencyType = 'js' | 'css' | 'html';

export type DependencyTypeCount = {
  js: number;
  css: number;
  html: number;
};

/**
 * `Dependency` defines the interface that will compose
 * the `FileBundle`
 */
export interface Dependency {
  get type(): DependencyType;
  get size(): number;
}

/**
 * `JavascriptDependency`, `CssDependency` and
 * `HTMLDependency` are the concrete implementations of the
 * `Dependency` interface
 */
export class JavascriptDependency implements Dependency {
  type: DependencyType;

  size: number;

  constructor(size: number = 0) {
    this.size = 100 + size;
    this.type = 'js';
  }
}

export class CssDependency implements Dependency {
  type: DependencyType;

  size: number;

  constructor(size: number = 0) {
    this.size = 25 + size;
    this.type = 'css';
  }
}

export class HTMLDependency implements Dependency {
  type: DependencyType;

  size: number;

  constructor(size: number = 0) {
    this.size = 150 + size;
    this.type = 'html';
  }
}

/**
 * `FileBundle` is the composed class which may content 
 * dependencies
 */
export class FileBundle {
  constructor(private dependencies: Dependency[] = []) {}

  addDependency(dep: Dependency): void {
    this.dependencies.push(dep);
  }

  get bundleSize() {
    return this.dependencies.reduce((sum, dep) => sum + dep.size, 0);
  }

  get typeCount(): DependencyTypeCount {
    return this.dependencies.reduce(
      (sum, dep) => {
        const next = { ...sum };

        next[dep.type]++;

        return next;
      },
      { css: 0, html: 0, js: 0 } as DependencyTypeCount
    );
  }
}
