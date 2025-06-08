import { doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

// 방문자수 업데이트
export async function updateVisitor(date: string) {
    const ref = doc(db, "visitor", date);
    await updateDoc(ref, {
        count: increment(1)
    });
    return true;
}