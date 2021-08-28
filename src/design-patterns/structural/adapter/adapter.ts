/**
 * `BashShell` is the class that is used in the
 * client to run specifically `BashShellScript`'s
 */
export class BashShell {
  constructor(private script: BashShellScript) {}

  get bashEnv(): Environment {
    return this.script.bashEnv;
  }
}

/**
 * `BashShellScript` is the interface that should be
 * implemented by the `BashScript` itself and the
 * adapters that will be used by other shell scripts
 */
export interface BashShellScript {
  get bashEnv(): Environment;
}

/**
 * `BashScript` and `ZshScript` are the two possible
 * scripts to be used, yet only `BashScript` implements
 * `BashShellScript` and therefore it can only be run
 * in the `BashShell`
 */
export class BashScript implements BashShellScript {
  constructor(private script: string) {}

  get bashEnv(): Environment {
    return {
      adapted: false,
      interpreter: '/bin/bash',
      language: 'bash',
      script: this.script,
    } as Environment;
  }
}

export class ZshScript {
  constructor(private script: string) {}

  get zshEnv(): Environment {
    return {
      adapted: false,
      interpreter: '/bin/zsh',
      language: 'zsh',
      script: this.script,
    };
  }
}

/**
 * `BashAdapter` will be used to use `ZshScripts` in
 * a `BashShell` as it implements the `BashShellScript`
 * interface
 */
export class BashAdapter implements BashShellScript {
  constructor(private script: ZshScript) {}

  get bashEnv(): Environment {
    return {
      ...this.script.zshEnv,
      interpreter: '/bin/bash',
      adapted: true,
    } as Environment;
  }
}

export type Environment = {
  adapted: boolean;
  interpreter: '/bin/bash' | '/bin/zsh';
  language: 'bash' | 'zsh';
  script: string;
};
