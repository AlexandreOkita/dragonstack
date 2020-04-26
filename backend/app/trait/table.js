const pool = require('../../datqabasePool');

class TraitTable {
    static getTraitId({traitType, traitValue}) {
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT id FROM trait WHERE "traitType" = $1 AND "traitValue" = $2',
                [traitType, traitValue]
            );
        })
    }
}