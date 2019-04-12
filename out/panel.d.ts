export declare class Panel {
    private modalDialog;
    private _body;
    private _footer;
    private _header;
    private backdrop;
    private panel;
    private modal;
    constructor(element: HTMLElement);
    readonly header: HTMLElement;
    readonly body: HTMLElement;
    readonly footer: HTMLElement;
    build(element: HTMLElement): void;
    show(): void;
    hide(): void;
}
