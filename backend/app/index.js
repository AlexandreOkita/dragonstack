const GenerationEngine = require('./generation/generationEngine')
const express = require('express');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);


engine.start();


module.exports = app;

/*
const Generation = require('./generation')

const generation = new Generation;

console.log('generation:', generation);

const gooby = generation.newDragon({nickname: 'gooby'});

console.log('gooby: ', gooby);

setTimeout(() => {
    const flopy = generation.newDragon({nickname: 'flopy'});
    console.log('flopy', flopy);
}, 15000);
*/







/*
const Dragon = require('./dragon.js');

const fooey = new Dragon({birthdate: new Date(), nickname: 'fooey'});
setTimeout(() => {
    const baloo = new Dragon({nickname: 'baloo', birthdate: new Date()});
    console.log('baloo', baloo);
}, 3000)


const joey = new Dragon();
const logy = new Dragon({nickname: 'logy'})


console.log('fooey', fooey);
console.log('logy', logy);
console.log('joey', joey);
*/