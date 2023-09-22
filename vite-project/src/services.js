import { doc, getDoc, collection, getDocs,addDoc, getFirestore, query, where } from "firebase/firestore"


export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore()

        const itemDoc = doc(db, "items", id)

        getDoc(itemDoc)
            .then((doc) => {
                if (doc.exists()) {
                    resolve({ id: doc.id, ...doc.data() })
                } else {
                    resolve(null)
                }
            })
            .catch((error) => reject(error))
    })
}

export const getProducts = (categor) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore()

        const itemCollection = collection(db, "items")

        let q;
        if (categor) {
            q = query(itemCollection, where("category", "==", categor))
        } else {
            q = query(itemCollection)
        }

        getDocs(q)
            .then((snapshot) => {
                const productos = snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(productos)
            })
            .catch((error) => reject(error))
    })
}

export const createOrders = (orden) =>{
    const db = getFirestore()

    const orderCollection = collection(db, "order")

    return addDoc(orderCollection, orden)
}