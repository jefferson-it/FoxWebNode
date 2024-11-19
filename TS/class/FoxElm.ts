import { IsFoxElement } from "../functions/InstanceOf.js";
import { SettingsFox, StylesFoxes } from "../interfaces/Interface.Fox";
import { FoxElement, FoxENV, FoxEvents } from "../interfaces/Types.Fox";

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
export class $FoxElm{  
    elm!: FoxElement;
    #oldContent!: string | undefined;
    
    /** 
     * @param {FoxElement | HTMLElement} elm 
     */
    constructor(elm: FoxElement){
        let elm_:any = elm;
        this.elm = elm_?.elm || elm;
    }
// Events
    /**
     * Adicione um event
     * @param {FoxEvents} env < Nome do DOM Event
     * @param {FoxENV} task < Função disparada no evento
     */
     $Env(env: FoxEvents, task: FoxENV){
        this.elm?.addEventListener(env, task);
    }
    /** 
     * Evento de Clique / Toque
     * @param {FoxENV} env < Função disparada no evento
     */
    OnPress(env: FoxENV){
        this.$Env("click", env);
    }
    /** 
     * Evento de Clique Direito / Tocar segurar
     * @param {FoxENV} env < Função disparada no evento
     */
    OnRightPress(env: FoxENV){
        this.$Env("contextmenu", env);
    }
    /** 
     * Evento de Por o mouse em cima
     * @param {FoxENV} env < Função disparada no evento
     */
    OnHover(env: FoxENV){
        this.$Env("mouseenter", env);
    }
   /** 
     * Evento de tirar o mouse de cima
     * @param {FoxENV} env < Função disparada no evento
     */
    OnHoverOut(env: FoxENV){
        this.$Env("mouseout", env);
    }
    /** 
     * Quando um formulário enviar dados
     * @param {FoxENV} env < Função disparada no evento
     */
    OnSubmit(env: FoxENV){
        this.$Env("submit", env);
    }
    /** 
     * Valor do input alterado
     * @param {FoxENV} env  < Função disparada no evento
     */
    OnChange(env: FoxENV){
        this.$Env("change", env);
    }
    /** 
     * Pressionar tecla 
     * @param {FoxENV} env  < Função disparada no evento 
     */
    OnKeyDown(env: FoxENV){
        this.$Env("keydown", env);
    }
    /**
     * Soltar tecla 
     * @param {FoxENV} env  < Função disparada no evento
     */
    OnKeyUp(env: FoxENV){
        this.$Env("keyup", env);
    }
    /** 
     * Pressionar tecla 
     * @param {FoxENV} env < Função disparada no evento
     */
    OnKeyPress(env: FoxENV){
        this.$Env("keypress", env);
    }
    // Contents Get
    /**
     * Obter conteúdo do elemento
     * @param {"html" | "txt"} t - Tipo
     */
    GetContent(t: "html" | "txt"){
        return t === "txt"? this.elm?.outerText: this.elm?.outerHTML;
    }
    GetHTML(){
        return this.GetContent("html")
    }
    GetTXT(){
        return this.GetContent("txt");
    }
    // Contents Set
    /**
     * Adicionar conteúdo ao elemento
     * @param {"html" | "txt"} t - tipo
     * @param {string} value - valor
     * @param {boolean} append - acrescentar(true), sobrescrever(false)
     */
    SetContent(t: "html" | "txt", value: string, append: boolean = false){
        let elm_:any = this.elm;
        this.#oldContent = this.GetContent("html");

        if(t == "html" && !append){
            elm_["innerHTML"] = value;
        }else if(t == "html" && append){
            elm_["innerHTML"] += value;
        }else if(t == "txt" && !append){
            elm_["innerText"] = value;
        }else if(t == "txt" && append){
            elm_["innerText"] += value;
        }
    }
    /**
     * Adicionar conteúdo como HTML
     * @param {string} v < valor
     */
    SetHTML(v: string){
        this.SetContent("html", v)
    }
     /**
     * Adicionar conteúdo como Texto
     * @param {string} v < Valor
     */
    SetTXT(v: string){
        this.SetContent("txt", v)
    }
    /**
     * Adicionar conteúdo como HTML, sem sobrescrever
     * @param {string} v 
     */
    AddHTML(v: string){
        this.SetContent("html", v, true)
    }
    /**
     * Adicionar conteúdo como Texto, sem sobrescrever
     * @param {string} v 
     */
    AddTXT(v: string){
        this.SetContent("txt", v, true)
    }
    /**
     * Após mudar o conteúdo, pode voltar ao conteúdo anterior
     * @param {"html" | "txt"} t 
     */
    ReturnContent(t: "html" | "txt"){
        this.SetContent(t, this.#oldContent || "");
    }
    // Child/Feather
    /**
     * Remover elemento
     */
    Remove(){
        this.elm?.remove()
    }
    /**
     * Remover elemento filho
     * @param {number} index 
     */
    RemoveChild(index: number){
        try {
            this.GetChild(index)?.Remove();
        } catch (error) {
            this.GetChild(index)?.remove();
        }
    }
    /**
     * Obtenha os elementos filhos
     * @param {number} index 
     * @returns {$FoxElm[] | $FoxElm} 
     */
    GetChild(index?: number): any{
        const children = []
        let elm_:any = this.elm
        for (let c of elm_?.children) {
            children.push(c)
        }
        return index? children[index]: children;
    }
    /**
     * Adicione elementos filhos
     * @param {$FoxElm[]} children 
     */
    AddChild(...children: $FoxElm[]){
        for(let child of children){
            let elm_:any = this.elm
            let chd:any = child
            if(IsFoxElement(child)){
                elm_.appendChild(chd?.elm);                
            }else{
                elm_.appendChild(chd);                
            }
        }
    }
    /**
     * Adicione estilos 
     * @param {StylesFoxes} styles < Objeto de estilo 
    */
    $Styles(styles:StylesFoxes){
        const styleToUse: { [x: string]: string } = ConvertOfCSS(styles);

        var keys: Array<any> = Object.keys(styleToUse)
        for (let style of keys) {
            let a: any = styleToUse
            let elm_:any = this.elm;
            elm_.style[style] = a[style]
        }

        function ConvertOfCSS(style: { [x: string]: any }) {
            let returnItem: { [x: string]: string } = {};
            let keys = Object.keys(style)
            let keysNew: string[] = [];

            for (let item of keys) {
                let key = item
                if (item.includes("-")) {
                    let index = 0;
                    let ss = "";
                    for (let subItem of key) {
                        if (subItem == "-") {
                            ss += item[index++].toLocaleUpperCase();
                            continue
                        }
                        else ss += subItem
                        index++;
                    }
                    keysNew.push(ss);
                } else {
                    keysNew.push(item);
                }
            }
            for (let i in keysNew) {
                returnItem[keysNew[i]] = style[keys[i]];
            }

            return returnItem;
        }
    }

    // Proprieties
    /**
     * Adicionar classes
     * @param {string[]} className 
     */
    AddClass(...className: string[]){
        for(let cls of className){
            if(!this.elm?.classList.contains(cls)){
                this.elm?.classList.add(cls)
            }
        }
    }
    /**
     * Deletar classes
     * @param {string[]} className 
     */
    DeleteClass(...className: string[]){
        for(let cls of className){
            if(this.elm?.classList.contains(cls)){
                this.elm?.classList.remove(cls)
            }
        }
    }
    /**
     * Adicionar props
     * @param {string} target 
     * @param {string} value 
     */
    AddProps(target: string, value: string){
        this.elm?.setAttribute(target, value)
    }
    /**
     * Deletar props
     * @param {string} target 
     */
     DeleteProps(target: string,){
        this.elm?.removeAttribute(target)
    }
    /**
     * Obter Props
     * @param {string} target 
     * @returns {string | null | undefined}
     */
    GetProps(target: string): string | null | undefined{
        return this.elm?.getAttribute(target)
    }
    /**
     * Adicionar ID ao elemento
     * @param {string} newID 
     */
    SetID(newID: string){
        let elm_:any = this.elm
        elm_.id = newID;
    }
    // Input
    GetVal(){
        let elm_:any = this.elm
        return elm_.value
    }  
    /**
     * Adicionar valor
     * @param {string} val 
     */
    SetVal(val: string){
        let elm_:any = this.elm
        elm_.value = val;
    }
    // Settings
    /**
     * Adicione configurações por meio de objeto
     * @param {SettingsFox} settings 
     */
    SetSetting(settings:SettingsFox){
        let values = Object.values(settings);
        let keys = Object.keys(settings);
        let i = 0;

        for(let c of keys){
            let val = values[i];
            
            if(c == "class") this.AddClass(val);
            else if(c == "textHTML") this.SetHTML(val);
            else if(c == "textHTMLPlus") this.AddHTML(val);
            else if(c == "textPlus") this.AddTXT(val);
            else if(c == "text") this.SetTXT(val);
            else if(c.includes("type")) this.AddProps("type", val);
            else if(c === "style") this.$Styles(val);
            else if(c === "feather") val.AddChild(this.elm);
            else this.AddProps(c, val);

            i++;
        }
    }
}