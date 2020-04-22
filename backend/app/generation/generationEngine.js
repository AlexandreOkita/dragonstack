const Generation = require('./index.js');
const GenerationTable = require('./table')


class GenerationEngine {
    constructor() {
        this.generation;
        this.timer;
    }

    start() {
        this.buildNewGeneration();
    }

    stop() {
        clearTimeout(this.timer);
    }

    buildNewGeneration() {
        //pq fazer como var local?
        const generation =  new Generation();

        GenerationTable.storeGeneration(this.generation)
        .then(({ generationId }) => {
            this.generation = generation
            this.generation.generationId = generationId;
            this.timer = setTimeout(
                () => {this.buildNewGeneration()},
                this.generation.expiration.getTime() - Date.now()
            );
        })
        .catch(error => console.error(error))

        console.log("Generation: ", this.generation);
    }
}

module.exports = GenerationEngine;