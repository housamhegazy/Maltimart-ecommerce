import  { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


export default function useGetdata(collectionName) {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, collectionName);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData()
  }, []);
  return {data}
}
