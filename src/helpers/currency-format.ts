/** * Formats a number into a Brazilian Real (BRL) currency string. * The number to format. *  A string formatted as BRL currency (e.g., "R$ 1.234,56"). */
// @param value 
// @returns 

export const formatCurrency = (value: number): string => { 
    return new Intl.NumberFormat('pt-BR', { 
        style: 'currency', currency: 'BRL', }).
        format(value);
     };