import { child, get, getDatabase, ref, set } from "firebase/database"
import firebaseApp from "./firebase"

const db = getDatabase(firebaseApp)

export const GROUP_OSEA = "osea"
export const GROUP_TIPO = "tipo"

export const selectGroup = async () => {

    const groupsRef = ref(db, 'groups/');
    const groupOsea = await get(child(groupsRef, GROUP_OSEA))
    const groupTipo = await get(child(groupsRef, GROUP_TIPO))
    let oseaSize = groupOsea.exists() ? groupOsea.val().length : 0
    let tipoSize = groupTipo.exists() ? groupTipo.val().length : 0

    if (oseaSize - tipoSize > 1) return GROUP_TIPO
    else if (tipoSize - oseaSize > 1) return GROUP_OSEA
    else return Math.random() > 0.5 ? GROUP_TIPO : GROUP_OSEA
}

export const savePerson = (name, group) => {
    const groupSelected = ref(db, 'groups/' + group);
    get(groupSelected).then((snapshot) => {
        if (snapshot.exists()) {
            const result = snapshot.val();
            result.push(name)
            set(groupSelected, result)
        } else {
            set(groupSelected, [name]);
        }
    })
}

export const getGroup = async (group) => {
    const groupSelected = ref(db, 'groups/' + group);
    let result = []
    const snapshot = await get(groupSelected)
    if (snapshot.exists()) {
        result = snapshot.val();
    }

    return result
}