import {StringInvoke, API} from "../node_modules/crossmodule/assembly/index"

export declare function allocate(size: i32): i32;
export declare function deallocate(ptr: i32, size: i32): void;
export declare function invoke(ptr: i32, size: i32): i32;
export declare function store(ptr: i32, byte: u8): void;
export declare function load(ptr: i32): u8;

export function getStringInvoker(): StringInvoke {
    let api = new API(invoke, allocate, deallocate, store, load);

    return new StringInvoke(api);
}
