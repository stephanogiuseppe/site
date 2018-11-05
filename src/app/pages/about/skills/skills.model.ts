export class Skill {
    constructor(
        public id?: number,
        public name?: string,
        public currentVersion?: string,
        public side?: string,
        public developedBy?: string
    ) {
        this.id = id;
        this.name = name;
        this.currentVersion = currentVersion;
        this.side = side;
        this.developedBy = developedBy;
    }
}
