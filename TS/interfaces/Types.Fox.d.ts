export type FoxElement = HTMLInputElement | HTMLElement | HTMLInputElement | null;
export type FoxENV = <K extends keyof HTMLElementEventMap>(e?: HTMLElementEventMap[K]) => any;
export type ConversorTo = "String" | "Number" | "JSON" | "Object";
export type FoxEvents =  keyof HTMLElementEventMap;
export type FoxTags = "button" | "input" | "div";

export type conversorTo = "str" | "obj" | "num" | "JSON" | "obj"



export type justify = "baseline" | "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "space-evenly"
export type alignTxt = "center" | "end" | "left" | "justify" | "right" | "start";
export type overflow = "hidden" | "auto" | "scroll" | "visible"

export type commandHistory = "redirect_page"| "redirect_path" | "redirect_state" | "back" | "next" | "reload";
export type FoxHTTPMethod = "GET" | "POST" | "DELETE"

export type queryParserTo = "object" | "string"