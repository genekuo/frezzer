import { reducer, actions } from '../../freezer';
import * as FLAVORS from '../../../constants/flavors';
 
describe('Freezer reducer', function () {
    it('should store the temperature in the state', function () {
        const newState = reducer(undefined, actions.updateTemperature(-5));
        expect(newState.temperature).toEqual(-5);
    });

    it('should add the scoops to a flavor if it already exists', function () {
        const oldState = {
            flavors: {
                [FLAVORS.VANILLA]: 7
            }
        }
        const newState = reducer(oldState, actions.addProductToFreezer(FLAVORS.VANILLA, 5));
        expect(newState.flavors[FLAVORS.VANILLA]).toEqual(12);
    });

    it('should make sure not to overflow the freezer', function () {
        const oldState = {
            flavors: {
                [FLAVORS.VANILLA]: 58
            }
        }
        const newState = reducer(oldState, actions.addProductToFreezer(FLAVORS.VANILLA, 5));
        expect(newState.flavors[FLAVORS.VANILLA]).toEqual(60);
    });

    it('should remove the scoop from the freezer', function () {
        const oldState = {
            flavors: {
                [FLAVORS.VANILLA]: 58
            }
        }
        const newState = reducer(oldState, actions.removeScoop(FLAVORS.VANILLA));
        expect(newState.flavors[FLAVORS.VANILLA]).toEqual(57);
    });

    it('should not remove the scoop and go below 0', function () {
        const oldState = {
            flavors: {
                [FLAVORS.VANILLA]: 0
            }
        }
        const newState = reducer(oldState, actions.removeScoop(FLAVORS.VANILLA));
        expect(newState.flavors[FLAVORS.VANILLA]).toEqual(0);
    });
})