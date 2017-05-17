import { Thing } from '../src/Thing'
import { expect } from 'chai';

describe('example test', () => {
    let thingUnderTest: Thing;
    
    beforeEach(() => {
        thingUnderTest = new Thing();
    })

    it('does something', () => {
        expect(thingUnderTest.doSomething(1)).to.be.equal(2);
    });
});