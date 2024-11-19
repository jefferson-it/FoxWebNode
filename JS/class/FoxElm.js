"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FoxElm = void 0;
const InstanceOf_js_1 = require("../functions/InstanceOf.js");
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
class $FoxElm {
    elm;
    #oldContent;
    /**
     * @param {FoxElement | HTMLElement} elm
     */
    constructor(elm) {
        let elm_ = elm;
        this.elm = elm_?.elm || elm;
    }
    // Events
    /**
     * Adicione um event
     * @param {FoxEvents} env < Nome do DOM Event
     * @param {FoxENV} task < Função disparada no evento
     */
    $Env(env, task) {
        this.elm?.addEventListener(env, task);
    }
    /**
     * Evento de Clique / Toque
     * @param {FoxENV} env < Função disparada no evento
     */
    OnPress(env) {
        this.$Env("click", env);
    }
    /**
     * Evento de Clique Direito / Tocar segurar
     * @param {FoxENV} env < Função disparada no evento
     */
    OnRightPress(env) {
        this.$Env("contextmenu", env);
    }
    /**
     * Evento de Por o mouse em cima
     * @param {FoxENV} env < Função disparada no evento
     */
    OnHover(env) {
        this.$Env("mouseenter", env);
    }
    /**
      * Evento de tirar o mouse de cima
      * @param {FoxENV} env < Função disparada no evento
      */
    OnHoverOut(env) {
        this.$Env("mouseout", env);
    }
    /**
     * Quando um formulário enviar dados
     * @param {FoxENV} env < Função disparada no evento
     */
    OnSubmit(env) {
        this.$Env("submit", env);
    }
    /**
     * Valor do input alterado
     * @param {FoxENV} env  < Função disparada no evento
     */
    OnChange(env) {
        this.$Env("change", env);
    }
    /**
     * Pressionar tecla
     * @param {FoxENV} env  < Função disparada no evento
     */
    OnKeyDown(env) {
        this.$Env("keydown", env);
    }
    /**
     * Soltar tecla
     * @param {FoxENV} env  < Função disparada no evento
     */
    OnKeyUp(env) {
        this.$Env("keyup", env);
    }
    /**
     * Pressionar tecla
     * @param {FoxENV} env < Função disparada no evento
     */
    OnKeyPress(env) {
        this.$Env("keypress", env);
    }
    // Contents Get
    /**
     * Obter conteúdo do elemento
     * @param {"html" | "txt"} t - Tipo
     */
    GetContent(t) {
        return t === "txt" ? this.elm?.outerText : this.elm?.outerHTML;
    }
    GetHTML() {
        return this.GetContent("html");
    }
    GetTXT() {
        return this.GetContent("txt");
    }
    // Contents Set
    /**
     * Adicionar conteúdo ao elemento
     * @param {"html" | "txt"} t - tipo
     * @param {string} value - valor
     * @param {boolean} append - acrescentar(true), sobrescrever(false)
     */
    SetContent(t, value, append = false) {
        let elm_ = this.elm;
        this.#oldContent = this.GetContent("html");
        if (t == "html" && !append) {
            elm_["innerHTML"] = value;
        }
        else if (t == "html" && append) {
            elm_["innerHTML"] += value;
        }
        else if (t == "txt" && !append) {
            elm_["innerText"] = value;
        }
        else if (t == "txt" && append) {
            elm_["innerText"] += value;
        }
    }
    /**
     * Adicionar conteúdo como HTML
     * @param {string} v < valor
     */
    SetHTML(v) {
        this.SetContent("html", v);
    }
    /**
    * Adicionar conteúdo como Texto
    * @param {string} v < Valor
    */
    SetTXT(v) {
        this.SetContent("txt", v);
    }
    /**
     * Adicionar conteúdo como HTML, sem sobrescrever
     * @param {string} v
     */
    AddHTML(v) {
        this.SetContent("html", v, true);
    }
    /**
     * Adicionar conteúdo como Texto, sem sobrescrever
     * @param {string} v
     */
    AddTXT(v) {
        this.SetContent("txt", v, true);
    }
    /**
     * Após mudar o conteúdo, pode voltar ao conteúdo anterior
     * @param {"html" | "txt"} t
     */
    ReturnContent(t) {
        this.SetContent(t, this.#oldContent || "");
    }
    // Child/Feather
    /**
     * Remover elemento
     */
    Remove() {
        this.elm?.remove();
    }
    /**
     * Remover elemento filho
     * @param {number} index
     */
    RemoveChild(index) {
        try {
            this.GetChild(index)?.Remove();
        }
        catch (error) {
            this.GetChild(index)?.remove();
        }
    }
    /**
     * Obtenha os elementos filhos
     * @param {number} index
     * @returns {$FoxElm[] | $FoxElm}
     */
    GetChild(index) {
        const children = [];
        let elm_ = this.elm;
        for (let c of elm_?.children) {
            children.push(c);
        }
        return index ? children[index] : children;
    }
    /**
     * Adicione elementos filhos
     * @param {$FoxElm[]} children
     */
    AddChild(...children) {
        for (let child of children) {
            let elm_ = this.elm;
            let chd = child;
            if ((0, InstanceOf_js_1.IsFoxElement)(child)) {
                elm_.appendChild(chd?.elm);
            }
            else {
                elm_.appendChild(chd);
            }
        }
    }
    /**
     * Adicione estilos
     * @param {StylesFoxes} styles < Objeto de estilo
    */
    $Styles(styles) {
        const styleToUse = ConvertOfCSS(styles);
        var keys = Object.keys(styleToUse);
        for (let style of keys) {
            let a = styleToUse;
            let elm_ = this.elm;
            elm_.style[style] = a[style];
        }
        function ConvertOfCSS(style) {
            let returnItem = {};
            let keys = Object.keys(style);
            let keysNew = [];
            for (let item of keys) {
                let key = item;
                if (item.includes("-")) {
                    let index = 0;
                    let ss = "";
                    for (let subItem of key) {
                        if (subItem == "-") {
                            ss += item[index++].toLocaleUpperCase();
                            continue;
                        }
                        else
                            ss += subItem;
                        index++;
                    }
                    keysNew.push(ss);
                }
                else {
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
    AddClass(...className) {
        for (let cls of className) {
            if (!this.elm?.classList.contains(cls)) {
                this.elm?.classList.add(cls);
            }
        }
    }
    /**
     * Deletar classes
     * @param {string[]} className
     */
    DeleteClass(...className) {
        for (let cls of className) {
            if (this.elm?.classList.contains(cls)) {
                this.elm?.classList.remove(cls);
            }
        }
    }
    /**
     * Adicionar props
     * @param {string} target
     * @param {string} value
     */
    AddProps(target, value) {
        this.elm?.setAttribute(target, value);
    }
    /**
     * Deletar props
     * @param {string} target
     */
    DeleteProps(target) {
        this.elm?.removeAttribute(target);
    }
    /**
     * Obter Props
     * @param {string} target
     * @returns {string | null | undefined}
     */
    GetProps(target) {
        return this.elm?.getAttribute(target);
    }
    /**
     * Adicionar ID ao elemento
     * @param {string} newID
     */
    SetID(newID) {
        let elm_ = this.elm;
        elm_.id = newID;
    }
    // Input
    GetVal() {
        let elm_ = this.elm;
        return elm_.value;
    }
    /**
     * Adicionar valor
     * @param {string} val
     */
    SetVal(val) {
        let elm_ = this.elm;
        elm_.value = val;
    }
    // Settings
    /**
     * Adicione configurações por meio de objeto
     * @param {SettingsFox} settings
     */
    SetSetting(settings) {
        let values = Object.values(settings);
        let keys = Object.keys(settings);
        let i = 0;
        for (let c of keys) {
            let val = values[i];
            if (c == "class")
                this.AddClass(val);
            else if (c == "textHTML")
                this.SetHTML(val);
            else if (c == "textHTMLPlus")
                this.AddHTML(val);
            else if (c == "textPlus")
                this.AddTXT(val);
            else if (c == "text")
                this.SetTXT(val);
            else if (c.includes("type"))
                this.AddProps("type", val);
            else if (c === "style")
                this.$Styles(val);
            else if (c === "feather")
                val.AddChild(this.elm);
            else
                this.AddProps(c, val);
            i++;
        }
    }
}
exports.$FoxElm = $FoxElm;
