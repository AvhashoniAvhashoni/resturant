export class Testimonal {
    public id?: string;
    public name: string;
    public image: string;
    public quote: string;
    constructor(name: string, image: string, quote: string, id?: string) {
        this.name = name;
        this.image = image;
        this.quote = quote;
        id != null ? this.id = id : '';
    }
}
