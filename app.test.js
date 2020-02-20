const { app } = require('./app.js');
const request = require('supertest');

describe('GET /location', () => {
    test('Test my API responses',
        async(done) => {
            
            const response = await request(app)
                .get('/location?search=portland');
            
            expect(response.body).toEqual({
                formattedQuery: 'Portland, Multnomah County, Oregon, USA', 
                latitude: '45.5202471', 
                longitude: '-122.6741949'
            });
            
            expect(response.statusCode).toBe(200);
            
            done();
        });
    test('Test /weather response',
        async(done) => {
        
            const response = await request(app)
                .get('/weather');
        
            expect(response.body).toEqual([{
                forecast: expect.any(String),
                time: expect.any(String)
            },
            {
                forecast: expect.any(String),
                time: expect.any(String)
            },
            {
                forecast: expect.any(String),
                time: expect.any(String)
            },
            {
                forecast: expect.any(String),
                time: expect.any(String)
            },
            {
                forecast: expect.any(String),
                time: expect.any(String)
            },
            {
                forecast: expect.any(String),
                time: expect.any(String)
            },
            {
                forecast: expect.any(String),
                time: expect.any(String)
            },
            {
                forecast: expect.any(String),
                time: expect.any(String)
            },
            ]);
        
            expect(response.statusCode).toBe(200);
        
            done();
        });
    test('Test /trails response',
        async(done) => {
            
            const response = await request(app)
                .get('/trails');
            
            expect(response.body).toEqual([
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
            ]
            );
            
            expect(response.statusCode).toBe(200);
            
            done();
        });
    test('Test /trails response',
        async(done) => {
            
            const response = await request(app)
                .get('/trails');
            
            expect(response.body).toEqual([
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
                {
                    name: expect.any(String),
                    location: expect.any(String),
                    length: expect.any(Number),
                    stars: expect.any(Number),
                    star_votes: expect.any(Number),
                    summary: expect.any(String),
                    trail_url: expect.any(String),
                    conditions: expect.any(String),
                    condition_date: expect.any(String)
                },
            ]
            );
            
            expect(response.statusCode).toBe(200);
            
            done();
        });    
    test('Test /events response',
        async(done) => {
            
            const response = await request(app)
                .get('/events');
            
            expect(response.body).toEqual([
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
                {
                    link: expect.any(String),
                    name: expect.any(String),
                    event_date: expect.any(String),
                    summary: expect.any(String)
                },
            ]

            );
            
            expect(response.statusCode).toBe(200);
            
            done();
        });

    test('Test /reviews response',
        async(done) => {
        
            const response = await request(app)
                .get('/reviews');
        
            expect(response.body).toEqual([
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
                {
                    name: expect.any(String),
                    image_url: expect.any(String),
                    price: expect.any(String),
                    rating: expect.any(Number),
                    url: expect.any(String)
                },
            ]);
        
            expect(response.statusCode).toBe(200);
        
            done();
        });
});

