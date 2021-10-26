/**
 * There are multiple subsystems defined which are used
 * together. The facade will keep them and calling their
 * respective method to accomplish the goal of the called
 * method.
 * If there's any subsytem that is changed in the facade,
 * will have no impact outside of it, as it is totally
 * decoupled.
 */

export interface Encripter {
    encrypt(value: string): string;
    decrypt(value: string): string;
}

export class NumberEncrypter implements Encripter {
    encrypt(value: string): string {
        return [...value].reduce((prev, curr, i) => {
            if (i === value.length - 1) {
                return `${prev}${curr.charCodeAt(0)}`;
            }

            return `${prev}${curr.charCodeAt(0)}.`;
        }, '');
    }

    decrypt(value: string): string {
        return value
            .split('.')
            .reduce(
                (prev, curr) => prev.concat(String.fromCharCode(+curr)),
                ''
            );
    }
}

export class StringEncrypter implements Encripter {
    encrypt(value: string): string {
        return [...value].reduce((prev, curr) => `${curr}${prev}`, '');
    }

    decrypt(value: string): string {
        return this.encrypt(value);
    }
}
