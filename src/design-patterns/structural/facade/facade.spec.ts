import { NumberEncrypter, StringEncrypter } from './facade';

describe('Subsystems', () => {
    describe('NumberEncrypter', () => {
        const codeAt = (c: string) => c.charCodeAt(0);

        const ne = new NumberEncrypter();

        it('should properly encrypt', () => {
            expect(ne.encrypt('encrypt')).toBe(
                `${codeAt('e')}.${codeAt('n')}.${codeAt('c')}.${codeAt(
                    'r'
                )}.${codeAt('y')}.${codeAt('p')}.${codeAt('t')}`
            );
        });

        it('should properly decrypt', () => {
            const value = `${codeAt('d')}.${codeAt('e')}.${codeAt(
                'c'
            )}.${codeAt('r')}.${codeAt('y')}.${codeAt('p')}.${codeAt('t')}`;

            expect(ne.decrypt(value)).toBe('decrypt');
        });
    });

    describe('StringEncrypter', () => {
        const ne = new StringEncrypter();

        it('should properly encrypt', () => {
            expect(ne.encrypt('encrypt')).toBe('tpyrcne');
        });

        it('should properly decrypt', () => {
            expect(ne.decrypt('tpyrced')).toBe('decrypt');
        });
    });
});
