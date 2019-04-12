export declare type Callback = (event: MouseEvent) => Promise<any>;
export declare type Arguments = {
    confirm?: string | (() => string);
    toast?: string | (() => string) | HTMLElement;
};
export declare function buttonOnClick(callback: Callback, args?: Arguments): (event: Event) => void;
export declare function buttonOnClick(element: HTMLButtonElement, callback: Callback, args?: Arguments): any;
