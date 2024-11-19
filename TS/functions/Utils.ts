// Math Function

import { IsNum } from "./VerifyTypes.js";
import { genRandomType } from "../interfaces/Interface.Fox.js";

/**
 * @typedef { import("../interfaces/Interface.Fox.d.ts").genRandomType } genRandomType
 * 
*/

/**
 * Gere um número aleatório
 * @param {number} min bote o valor mínimo a ser retornado
 * @param {number} max bote o valor máximo a ser retornado
 * @returns {number}
 */
export function GenRandom(min: number, max: number): number {
    return RoundNum(Math.random() * (max - min) + min)
}

/**
 * Arredonde o número de forma lógica
 * @param {number} num 
 * @returns {number}
 */
export function RoundNum(num: number): number {
    let numbers = num.toString().split(".")
    if ((numbers[1].toNum() == undefined && numbers[0].toInt() || numbers[1].toInt() <= 4)) return `${num}`.toInt();
    else if (numbers[1].toNum() >= 5) return `${num}`.toInt() + 1;
    else throw new Error("Operação inválida!");
}

/**
 * Arredonde o número para baixo
 * EX: 1.6 
 * logica: 2.0 ou 2
 * retorno 1.0 ou 1
 * @param {number} num 
 * @returns {number}
 */
export function RoundNumDown(num: number): number {
    return `${num}`.toInt()
}

/**
* Arredonde o número para cima
* EX: 1.2
* logica: 1.0 ou 1
* retorno 2.0 ou 2
* @param {number} num 
* @returns {number}
*/
export function RoundNumUp(num: number): number {
    return `${num}`.toInt() + 1
}

// String and Array Working
/**
 * Gere um texto aleatório, defina o limite máximo dele.
 * @param {number} maxLength - Quantidade de caracteres máximo
 * @param {genRandomType} settings - Defina as configurações
 * O atributo templateMask do settings defina um tipo de texto para ser mascarado com o @function MaskText
 * O Atributo noNum deve ser um valor booleano, se for true, então não será gerado números
 * O Atributo noLowerChar deve ser um valor booleano, se for true, então não será gerado letras minusculas
 * O Atributo noUpChar deve ser um valor booleano, se for true, então não será gerado letras minusculas
 * O Atributo firstChar deve ser um valor em string, que deve ser o primeiro carácter.
 * @returns {string}
 */
export function GenRandomText(maxLength: number, settings?: genRandomType): string {
    let allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let spacialChar = "*&¨%$#@!+_)([]{}`^~Ç/:?|'\"\\|"
    let endIndexOf = {
        upperLetter: allChar.indexOf("Z"),
        loweLetter: allChar.indexOf("z"),
        numberLetter: allChar.indexOf("9"),
    }
    let ranText = ""
    for (let l = 0; l < maxLength; l++) {
        let ranNum = GenRandom(0, allChar.length + 10)
        if (settings?.firstChar && l == 0) {
            ranText += settings?.firstChar
            continue
        }
        if (settings?.noNum == true && IsNum(allChar[ranNum])) {
            l--
            continue
        }
        if (settings?.noLowerChar == true && (ranNum <= endIndexOf.loweLetter && ranNum > endIndexOf.upperLetter)) {
            l--
            continue
        }
        if (settings?.noUpChar == true && ranNum <= endIndexOf.upperLetter) {
            l--
            continue
        }
        if (!allChar[ranNum]) {
            if (settings?.noSpecial == true) {
                l--
                continue
            } else {
                ranNum = GenRandom(0, spacialChar.length - 1)
                ranText += spacialChar[ranNum]
                continue
            }
        }

        ranText += allChar[ranNum]
    }

    if (settings?.templateMask) {
        ranText = MaskText(ranText, settings?.templateMask)
    }
    return ranText
}

/**
 * Mascare sua string, defina o template exemplo:
 * "###.###.###-##"
 * E seu texto, exemplo:
 * "00000000000"
 * e virará: 
 * "000.000.000-00"
 * @param {string} text - Texto a ser mascarado
 * @param {string} template - Templete - use as # para definir o valor para ser substituído
 * @returns {string}
 */
export function MaskText(text: string, template: string): string {
    let indexText = text.length
    let indexMask = FindAllIndex(template, "#").length
    let returnText = template
    if (indexMask == indexText) {
        for (const textImplants of text) {
            returnText = returnText.replace("#", textImplants)
        }
    } else {
        console.error("O template não coincide com o tamanho do texto a ser implementado!")
    }
    return returnText
}

/**
 * Uma das coisas mais chatas, é verificar os arrays, e essa função retorna todos os indices de um determinado valor no array ou string.
 * Desde que, haja valores repetidos.
 * @param {any} to - Valor a ser pesquisado
 * @param {string|any} ofItem - Vetor mãe
 * @returns {number[]}
 */
export function FindAllIndex(ofItem: any, to: string | any[]): number[] {
    let found = new Array()
    let counter = 0
    for (let item of ofItem) {
        let is = to == item
        if (is) {
            found.push(counter)
        }
        counter++
    }
    return found
}