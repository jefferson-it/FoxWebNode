/**
 * Verifica se o elemento é um número ou não
 * @param {string} target - Valor a ser analisado  
 * @returns {true|false}
 */
export function IsNum(target: any): true | false {
    return (target < 0) || (target >= 0)
}

/**
 * Verifica se o elemento é um Objeto(não array) ou não
 * @param {string} target - Valor a ser analisado  
 * @returns {true|false}
 */
export function IsObj(target: any): boolean {
    return (typeof target === "object" && Array.isArray(target) === false)
}

/**
 * Verifica se o elemento é um Array ou não
 * @param {string} target - Valor a ser analisado  
 * @returns {true|false}
 */

export function IsArray(target: any): boolean {
    return Array.isArray(target) === true
}

/**
 * Verifica se o elemento é uma matriz ou não
 * @param {string} target - Valor a ser analisado  
 * @returns {true|false}
 */
export function IsMatriz(target: any): boolean {
    let is = new Array()
    if (IsArray(target)) {
        is.push(true)
        for (let key of target) {
            is.push(IsArray(key))
        }
    }
    return !is.includes(false)
}