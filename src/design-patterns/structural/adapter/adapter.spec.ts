import {
  BashAdapter,
  BashScript,
  BashShell,
  Environment,
  ZshScript,
} from './adapter';

describe('Adapter', () => {
  describe('BashScript', () => {
    it('should return a bash env', () => {
      const script = new BashScript('bash.sh');

      expect(script.bashEnv).toStrictEqual({
        adapted: false,
        interpreter: '/bin/bash',
        language: 'bash',
        script: 'bash.sh',
      } as Environment);
    });
  });

  describe('ZshScript', () => {
    it('should return a zsh env', () => {
      const script = new ZshScript('zsh.sh');

      expect(script.zshEnv).toStrictEqual({
        adapted: false,
        interpreter: '/bin/zsh',
        language: 'zsh',
        script: 'zsh.sh',
      } as Environment);
    });
  });

  describe('BashAdapter', () => {
    it('should return an adapted zsh env', () => {
      const adapter = new BashAdapter(new ZshScript('zsh.sh'));

      expect(adapter.bashEnv).toStrictEqual({
        adapted: true,
        interpreter: '/bin/bash',
        language: 'zsh',
        script: 'zsh.sh',
      } as Environment);
    });
  });

  describe('BashShell', () => {
    it('should return a bash env', () => {
      const script = new BashScript('bash.sh');
      const shell = new BashShell(script);

      expect(shell.bashEnv).toStrictEqual(script.bashEnv);
    });

    it('should return an adapted zsh env', () => {
      const script = new BashAdapter(new ZshScript('zsh.sh'));
      const shell = new BashShell(script);

      expect(shell.bashEnv).toStrictEqual(script.bashEnv);
    });
  });
});
