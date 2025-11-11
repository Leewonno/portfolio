import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

// 특정 일자 가져오기
export async function getDocument(date: string) {
    if (date === undefined || date === null) {
        return;
    }
    if (date.length === 0) {
        return;
    }
    const docRef = doc(db, "visitor", date);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { result: true, data: docSnap.data() }
    } else {
        return { result: false };
    }
}

export async function getDocuments(start: string, end: string) {
    let result:any[] = [];
    try {
        // 제목 검색
        const q = query(
            collection(db, "visitor"),
            where("date", ">=", start),
            where("date", "<=", end)
        );
        const snapshot = await getDocs(q);
        snapshot.forEach((doc) => {
            result.push(doc.data());
        });
        return result;
    } catch (e) {
        return false;
    }

}