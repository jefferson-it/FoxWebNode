
declare namespace globalThis{
    export interface Object{
        keys: () => string[]
        values: () => string[]
    }
    
    
    export interface String{
        toObject: ()=> object | null
        toNum: ()=> number
        toInt: ()=> number
        toFloat: (decimal_case: number)=> number | string
    }
    
    export interface Number{
        format: (x: number) => string
        [Symbol.iterator]: () => {
            next: () => {done: boolean, value?: number} | undefined
        }
    
    }    
}