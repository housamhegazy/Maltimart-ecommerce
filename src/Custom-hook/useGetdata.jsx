import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { ref } from "firebase/storage";

export default function useGetdata(collectionName) {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, collectionName);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData()
  }, [collectionRef]);
  return {data}
}
