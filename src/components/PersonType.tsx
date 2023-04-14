import React from "react";
import { isEmpty, isInLength } from "./valid";
import { useTranslation } from "react-i18next";



export type Person = {
    id?: string, 
    name: string, 
    birthDate: Date,
    place: string,
};

/**
 * TODO:Validierungen schreiben 
 */

