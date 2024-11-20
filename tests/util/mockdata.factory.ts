import cloneDeep from 'lodash.clonedeep';
import { CreationOfEnvelop } from '../types/devopsgpt.type';

let mpMockData = new Map();


const defaultCreateAnEnvelop: CreationOfEnvelop = {
    recipientName: 'bala Gopi',
}

const createMockNewEnvelop = (overwrites: Partial<CreationOfEnvelop> = {}) => {
    return cloneDeep({
        ...defaultCreateAnEnvelop,
        ...overwrites
    });
};

export {
    createMockNewEnvelop,
};