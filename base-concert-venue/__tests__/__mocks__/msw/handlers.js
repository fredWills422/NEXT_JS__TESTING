import { rest } from 'msw';
import { readFakeData } from '@/__tests__/__mocks__/fakeData';
import { fakeUserReservations } from '../fakeData/userReservations';

export const handlers = [
  
  rest.get('http://localhost:3000/api/shows/:showId', async (req, res, ctx) => {
    
    const {fakeShows} = await readFakeData();
    const { showId } = req.params;
    // index / showId = 0 has seats available in fake data
    // index / showId = 1 has no seats available in fake data
    return res(ctx.json({ show: fakeShows[Number(showId)] }));
  
  }),
  rest.get('http://localhost:3000/api/users/:userId/reservations', (req, res, ctx) => 
    // note: implicitly return the first user's reservations for testing purposes
    res(ctx.json({ userReservations: fakeUserReservations }))
  ),

];