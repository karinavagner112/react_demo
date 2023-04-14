import { Person } from './PersonType';
import { DatabaseContextType } from './database';

/**
 * Moegliche Aktionen
 */
enum Types {
    Load = 'PERSON/LOAD',
    Delete = 'PERSON/DELETE',
    Add = 'PERSON/ADD',
    Update = 'PERSON/UPDATE'
};

type Action = |
{ type: Types.Load, data: Person[] } |
{ type: Types.Delete, id: string } |
{ type: Types.Add, person: Person } |
{ type: Types.Update, person: Person };


export const personReducer = (state: DatabaseContextType, action: Action): DatabaseContextType => {
    switch(action.type){
        case Types.Add: 
            return{
                ...state, 
                person:[
                    ...state.person,
                    action.person
                ]
            };

        case Types.Update: 
            //Array wird kopiert und die Kopie wird weiterbearbeitet 
            const copy = [...state.person];
            const index = copy.findIndex(e => e.id === action.person.id);
            copy[index] = action.person;

            return {
                ...state, 
                person: copy
            };
        
        case Types.Delete: 
            //Array neu erstellen ohne das betroffene Element
            return{
                ...state, 
                person: state.person.filter(eachElement => eachElement.id !== action.id)
            };
        default:
            //einfach zurueckgeben ohne Aenderungen
            return state; 
    }
}
