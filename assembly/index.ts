import {getStringInvoker} from "./signature";


let stringInvoker = getStringInvoker();

export class Result {
    checkPassed: bool;
    payload: string | null;
    errorMessage: string | null;

    constructor(result: string) {

        if (result.includes("[Error]")) {
            this.checkPassed = false;
            this.errorMessage = result;
        } else {
            this.checkPassed = true;
            this.payload = result;
        }
    }
}

export function checkSignature(request: string): Result {
    let result = stringInvoker.invoke(request);
    return new Result(result);
}
