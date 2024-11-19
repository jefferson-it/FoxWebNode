import { StylesFoxes } from "../interfaces/Interface.Fox.js";
import { $FoxElm } from "./FoxElm.js";

/**
 * @typedef { import("../interfaces/Interface.Fox.d.ts").StylesFoxes } StylesFoxes
 * @typedef { import("../interfaces/Interface.Fox.d.ts").SettingsFox } SettingsFox
 * @typedef { import("../interfaces/Types.Fox.ts").FoxElement} FoxElement
 * @typedef { import("../interfaces/Types.Fox.ts").FoxENV} FoxENV
 * @typedef { import("../interfaces/Types.Fox.ts").ConversorTo} ConversorTo
 * @typedef { import("../interfaces/Types.Fox.ts").FoxEvents} FoxEvents
 * @typedef { import("../interfaces/Types.Fox.ts").FoxTags} FoxTags
 * @typedef { import("../interfaces/Types.Fox.ts").FoxElm} $FoxElm
 * 
*/

export class $Foxes{
    elms!: $FoxElm[];
    [index: number]: $FoxElm;
    /** 
     * @param {string} query 
     */
    constructor(query: string){
        this.elms = [];

        let elms = document?.querySelectorAll(query);
        let i = 0;
        for(let c of elms){
            let a:any = c
                a = new $FoxElm(a);
            this.elms.push(a);
            this[i] = a;
            i++;
        } 
    }

     /**
     * Personalize todos os elementos
     * @param {StylesFoxes} style
     */
    $Styles(style: StylesFoxes){
        this.elms.forEach(v=>{
            v.$Styles(style);
        })
    }

    /**
     * Obtenha o conteúdo que está escrito no elemento
     * @param {"html" | "txt"} t 
     */
    GetContents(t: "html" | "txt"){
        let contents = [];
        for(let d of this.elms){
            contents.push(d.GetContent(t));
        }
        return contents;
    }
    GetHTML(){
        return this.GetContents("html")
    }
    GetTXT(){
        return this.GetContents("txt");
    }
    /**
     * Remova o elemento
     * @param {number} index 
     */
    Remove(index?: number){
        if(!index) for(let d of this.elms){
            d.Remove();
        }
        else this.elms[index].Remove();
    }
    /**
     * Adicione uma classe
     * @param {string[]} className 
     */
    AddClass(...className: string[]){
        for(let cls of className){
            for(let d of this.elms){
                if(!d?.elm?.classList.contains(cls)){
                    d?.elm?.classList.add(cls)
                }    
            }
        }
    }
    /**
     * Delete uma classe
     * @param {string[]} className 
     */
    DeleteClass(...className: string[]){
        for(let cls of className){
            for(let d of this.elms){
                if(d?.elm?.classList.contains(cls)){
                    d?.elm?.classList.remove(cls)
                }    
            }
        }
    }
    /**
     * Adicione uma prop
     * @param {string} target 
     * @param {string} value 
     */
    AddProps(target: string, value: string){
        for(let d of this.elms){
            d.elm?.setAttribute(target, value)   
        }
    }
    /**
     * delete uma prop
     * @param {string} target 
     */
    DeleteProps(target: string){
        for(let d of this.elms){
            d.elm?.removeAttribute(target)   
        }
    }
    /**
     * Obtenha o valor de uma prop
     * @param {string} target 
     * @param {number} target 
     */
    GetProps(target: string, index?: number){
        const list = [];
        for(let d of this.elms){
            list.push(d.elm?.getAttribute(target));
        }
        return index? list[index]: list
    }
    // Input
    /**
     * Obtenha os valores
     * @param {number} index 
     * @returns {string[] | string}
     */
    GetVal(index?: number): string[] | string{
        const list = []; 
        for(let d of this.elms){
            let elm_:any = d.elm
            list.push(elm_.value);
        }
        return index? list[index]: list;
    }
    /**
     * Adicione os valores
     * @param {string[]} val 
     */
    SetVal(...val: string[]){
        let i = 0;
        for(let d of this.elms){
            let elm_:any = d.elm
            elm_.value = val[i]
            i++;
        }
    }
} 