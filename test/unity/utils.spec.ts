import Utils from '../../src/shared/utils.service';
import { expect } from 'chai';
import 'mocha';

describe('Validar Funcao EhNuloOuVazio', () => {
    it(`Deve retornar true quando parametro for ""`, () => {
        const result = Utils.EhNuloOuVazio('');
        expect(result).to.equal(true);
    });
    it(`Deve retornar true quando parametro for {}`, () => {
        const result = Utils.EhNuloOuVazio({});
        expect(result).to.equal(true);
    });
    it(`Deve retornar true quando parametro for undefined`, () => {
        const result = Utils.EhNuloOuVazio(undefined);
        expect(result).to.equal(true);
    });
    it(`Deve retornar true quando parametro for []`, () => {
        const result = Utils.EhNuloOuVazio([]);
        expect(result).to.equal(true);
    });
    it(`Deve retornar false quando parametro for [1]`, () => {
        const result = Utils.EhNuloOuVazio([1]);
        expect(result).to.equal(false);
    });
});

describe('Validar Funcao hasStatusError', () => {
    it(`Deve retornar false quando parametro for da familia 200`, () => {
        const result = Utils.hasStatusError(200);
        expect(result).to.equal(false);
    });
    it(`Deve retornar true quando parametro não for da familia 200`, () => {
        const result = Utils.hasStatusError(500);
        expect(result).to.equal(true);
    });
});