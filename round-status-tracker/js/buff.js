class Buff {
    constructor(name, roundDuration) {
        this.name = name;
        this.roundDuration = roundDuration;
    }

    static List()
    {
        return [
            new Buff('Heroism', 10)
        ]
    }
}

module.exports = Buff