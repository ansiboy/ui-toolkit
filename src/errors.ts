import { Errors as BaseErrors } from "maishu-toolkit";

class Errors extends BaseErrors {
    canvasModuleRequired() {
        let msg = `Module canvas is required in node environment, please install canvas module.`;
        return new Error(msg);
    }
}

export let errors = new Errors();
