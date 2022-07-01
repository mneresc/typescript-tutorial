
export abstract class View<T> {
    protected elemento: HTMLElement;
    protected escape: boolean = false;

    constructor(selector: string, escape?: boolean) {
        this.elemento = document.querySelector(selector);
        if (escape) {
            this.escape = escape;
        }
    }


    update(model: T): void {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace('/<script>[\s\S]*?<\/script>/', "")
        }
        this.elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;

}