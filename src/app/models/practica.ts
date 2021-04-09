export class Practica {
    private _titol: string;
    private _contingut: string;
    private _dataexercici: string;
    private _tag: string;
    private _id: string;

    constructor() {
        this._titol = "";
        this._contingut = "";
        this._dataexercici = "";
        this._tag = "";
    }

    get titol(): string {
        return this._titol;
    }

    get contingut(): string {
        return this._contingut;
    }

    get dataexercici(): string {
        return this._dataexercici;
    }

    get tag(): string {
        return this._tag;
    }

    get id(): string {
        return this._id;
    }

    set titol(titol: string) {
        this._titol = titol;
    }

    set contingut(contingut: string) {
        this._contingut = contingut;
    }

    set dataexercici(dataexercici: string) {
        this._dataexercici = dataexercici;
    }

    set tag(tag: string) {
        this._tag = tag;
    }

    set id(id: string) {
        this._id = id;
    }

}

