
export class Negociacao {

    constructor(private _date: Date, public readonly quantidade: number, public readonly valor: number) { }

    get volume() {
        return this.valor * this.quantidade;
    }

    get data(): Date {
        return new Date(this._date.getTime());
    }
}