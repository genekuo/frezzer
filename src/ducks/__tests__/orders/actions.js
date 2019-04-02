import { actions, types } from '../../orders';
import { VANILLA } from '../../../constants/flavors';

describe('placeOrder()', function () {
    it('shoud have the right action type', function () {
        const action = actions.placeOrder({});
        expect(action.type).toEqual(types.PLACE_ORDER);
    });

    /**
     * customerName: String
     * createdAt: Number
     * cone: Boolean
     * scoops: Object
     */

     it('should contain the customer name in the payload', function () {
        const action = actions.placeOrder({
            customerName: 'Cindy',
        });

        expect(action.playload.customerName).toEqual('Cindy');
     });

     it('should contain the date of creation in the payload', function () {
         const action = actions.placeOrder({
            createdAt: 5,
         });

         expect(action.playload.createdAt).toEqual(5);
     });

     it('should contain the current date of creation in the payload if no date is given', function () {
        const action = actions.placeOrder({});

        expect(typeof action.playload.createdAt).toEqual('number');
     });

     it('should contain the cone/cup option in the payload', function () {
        const action = actions.placeOrder({
            cone: false,
        });

        expect(action.playload.cone).toEqual(false);
     });

     it('should default to a cone if no cone is given', function () {
        const action = actions.placeOrder({});

        expect(action.playload.cone).toEqual(true);
     });

     it('should contain the scoops object in the payload', function () {
        const action = actions.placeOrder({
            scoops: {
                [VANILLA]: 1
            },
        });

        expect(action.playload.scoops).toEqual({
            [VANILLA]: 1,
        });
     });
});

describe('fullfillOrder()', function () {
    it('should have the right action type', function () {
        const action = actions.fullfillOrder(5);
        expect(action.type).toEqual(types.FULLFIL_ORDER);
    });

    it('should have the ID in the payload', function () {
        const action = actions.fullfillOrder(5);
        expect(action.payload).toEqual(5);
    });
});

describe('payForOrder()', function () {
    it('should have the right action type', function () {
        const action = actions.payForOrder(5);
        expect(action.type).toEqual(types.PAY_FOR_ORDER);
    });

    it('should have the ID in the payload', function () {
        const action = actions.payForOrder(5);
        expect(action.payload).toEqual(5);
    });
});

describe('cancelOrder()', function () {
    it('should have the right action type', function () {
        const action = actions.cancelOrder(5);
        expect(action.type).toEqual(types.CANCEL_ORDER);
    });

    it('should have the ID in the payload', function () {
        const action = actions.cancelOrder(5);
        expect(action.payload).toEqual(5);
    });
});