/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';

const router = express.Router();

/*
  let orderbook = { }

  Hint: the data structure used for the orderbook can dramatically
        impact efficiency.
*/

const OrderStatus = {
  TYPE_FILLED: 'FILLED', // order matched entirely
  TYPE_PARTIALLY_FILLED: 'PARTIALLY_FILLED', // order matched partially and is pending in orderbook
  TYPE_REJECTED: 'REJECTED', // order failed to match
  TYPE_PENDING: 'PENDING', // order did not match and is pending in orderbook
} as const;

type TOrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

// eslint-disable-next-line no-unused-vars
router.post('/order/submit', (req: any, res: any, next: any) => {
  res.send({ message: 'Not implemented' });

  /*
    TODO
    - If the new order is a buy, then match with the other sell orders
    - If the new order is a sell, then match with the other buy orders

    Response format:
    {
      'id': '3f8ecd64-f37e-11eb-9a03-0242ac130003'
      'amount': ...,
      'price': ...,
      'status' 'FILLED' or 'PARTIALLY_FILLED' or 'REJECTED' or 'PENDING'
    }
  */
});

// eslint-disable-next-line no-unused-vars
router.get('/orderbook', (req: any, res: any, next: any) => {
  res.send({ message: 'Not implemented' });

  /*
    TODO
    - Return entire orderbook

    Response format:
    {
      'asks': [
        { 'price': ..., 'amount': ... },
        ...
      ],
      'bids': [
        { 'price': ..., 'amount': ... },
        ...
      ]
    }
  */
});

export default router;
