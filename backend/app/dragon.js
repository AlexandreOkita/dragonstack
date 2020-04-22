const TRAITS = require('../data/traits.json')

const DEFAULT_VALUES =
    {
        get birthdate(){
            return new Date();
        },
        nickname: 'unnamed',
        get randomTraits() {
            const traits = [];

            TRAITS.forEach(TRAIT => {
                const traitType = TRAIT.type;
                const traitValues = TRAIT.values;

                const traitValue = traitValues[
                    Math.floor(Math.random() * traitValues.length)
                ];

                traits.push({ traitType, traitValue });
            });

            return traits;
        }
    }

class Dragon {
    constructor({birthdate, nickname, traits} = {}) { 
        this.birthdate = birthdate || DEFAULT_VALUES.birthdate;
        this.ninckname = nickname || DEFAULT_VALUES.nickname;
        this.traits = DEFAULT_VALUES.randomTraits;
    }
}

module.exports = Dragon;