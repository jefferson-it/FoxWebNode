import { $FoxElm as $ } from "./FoxElm.js";


export class $Fox extends ${  
    /** 
     * @param {string} query 
     */
    constructor(query: string){
        super(document?.querySelector(query));
    }
}