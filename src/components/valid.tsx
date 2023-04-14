/**
 * Funktion schaut, ob das Feld leer ist oder nicht 
 */
export const isEmpty = (fieldValue: any): boolean => {
    return fieldValue === '' || fieldValue === undefined;
};

/**
 * Funktion prüft, ob die Variable minimale bzw. maximale Länge erreicht
 */
export const isInLength = (fieldValue: string, minLength: number, maxLength: number): boolean => {
    return fieldValue.length >= minLength && fieldValue.length <= maxLength;
};