import { child, get, getDatabase, ref, set } from "firebase/database"
import firebaseApp from "./firebase"

const db = getDatabase(firebaseApp)

export const GROUP_POPULARES = "populares"
export const GROUP_DIVINAS = "divinas"

export const selectGroup = async () => {

    const groupsRef = ref(db, 'groups/');
    const group1 = await get(child(groupsRef, GROUP_POPULARES))
    const group2 = await get(child(groupsRef, GROUP_DIVINAS))
    let group1Size = group1.exists() ? group1.val().length : 0
    let group2Size = group2.exists() ? group2.val().length : 0

    if (group1Size - group2Size > 1) return GROUP_DIVINAS
    else if (group2Size - group1Size > 1) return GROUP_POPULARES
    else return Math.random() > 0.5 ? GROUP_DIVINAS : GROUP_POPULARES
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