import {Result} from "../../assembly/index";
import "allocator/arena";

declare function logStr(str: string): void;

export class CrossModuleTest {
    //TODO fix error: TypeError: WebAssembly Instantiation: Import #0 module="signature" error: module is not an object or function
    //TODO that caused by importing methods from nonexisted module `signature` in test
    /*static shouldReturnResultWithError(): bool {
        let message = "[Error] Some error.";
        let result = new Result(message);

        assert(!result.checkPassed, "The message should be qualified as error.");
        assert(result.payload == null, "Payload should be null on error.");
        assert(result.errorMessage == message, "An error message should exist.");
        return true;
    }*/
}
