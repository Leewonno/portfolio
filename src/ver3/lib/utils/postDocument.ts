import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { getDocument } from "./getDocument";
import { updateVisitor } from "./updateDocument";

interface CreateDataType {
  date: string;
  count: number;
}

// 문서 생성 또는 업데이트
export async function createDocument(date: string, data: CreateDataType) {
  const res = await getDocument(date);
  if (!res) {
    return;
  }
  if (res.result) {
    await updateVisitor(date);
    return false;
  } else {
    await setDoc(doc(db, "visitor", date), data);
    return true;
  }
}