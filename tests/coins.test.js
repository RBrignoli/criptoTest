
// import { get_url_to_call } from './coins';

// describe('get_url_to_call', () => {
//     const originalEnv = process.env;
//     const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2I4NzBlMzExYWRlOWQzY2FiZjk5Y2MiLCJlbWFpbCI6InJhbW9uLmJyaWdub2xpNUBnbWFpbC5jb20iLCJuYW1lIjoiUmFtb24yNCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNzQwMTgzMjEwLCJleHAiOjE5OTkzODMyMTB9.Nv-rbjSGyntuQ_IjxfXwrzlYU-8mxct-th8ImrxoLPc'

//     beforeEach(() => {
//         jest.resetModules(); 
//         process.env = { ...originalEnv };
//     });

//     afterAll(() => {
//         process.env = originalEnv;
//     });

//     it('should return the correct URL with the provided query parameters', () => {
//         process.env.COINGECKO_API_KEY = 'test_api_key';
//         const url = '/coins/markets';
//         const query = '&vs_currency=usd&ids=bitcoin';
//         const expectedUrl = 'https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=test_api_key&vs_currency=usd&ids=bitcoin';

//         const result = get_url_to_call(url, query);
//         expect(result).toBe(expectedUrl);
//     });

//     it('should return the correct URL without query parameters', () => {
//         process.env.COINGECKO_API_KEY = 'test_api_key';
//         const url = '/coins/list';
//         const expectedUrl = 'https://api.coingecko.com/api/v3/coins/list?x_cg_demo_api_key=test_api_key';

//         const result = get_url_to_call(url);
//         expect(result).toBe(expectedUrl);
//     });
// });

// describe('Cripto API Integration Tests', () => {
//     it('should fetch the list of coins', async () => {
//         const response = await request(app)
//             .get('/coins/')
//             .set('Cookie', 'your_cookie_here'); 

//         expect(response.status).toBe(200);
//         expect(response.body).toBeInstanceOf(Array);
//     });

//     it('should fetch the current currency data', async () => {
//         const response = await request(app)
//             .get('/coins/markets')
//             .query({ ids: 'bitcoin', vs_currency: 'usd' })
//             .set('Cookie', 'your_cookie_here'); 

//         expect(response.status).toBe(200);
//         expect(response.body).toBeInstanceOf(Array);
//     });

//     it('should fetch the coin details by id', async () => {
//         const response = await request(app)
//             .get('/coins/bitcoin')
//             .set('Cookie', 'your_cookie_here'); 

//         expect(response.status).toBe(200);
//         expect(response.body).toHaveProperty('id', 'bitcoin');
//     });
// });