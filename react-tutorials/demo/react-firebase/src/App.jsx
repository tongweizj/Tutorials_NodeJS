import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { countCollection, db } from "./firebase";

function App() {
  const [count, setCount] = useState(-1);
  const [countID, setCountID] = useState(0);

  // 读取最后一次创建的记数器
  function readFromFB() {
    console.log("readFromFB");
    onSnapshot(countCollection, function (snapshot) {
      const counter = snapshot.docs[snapshot.docs.length - 1];
      setCount(() => counter.data().value);
      setCountID(() => counter.id);
    });
    console.log("count:", count);
    console.log(countID);
  }

  // 给数字 +1， 同步到firebase
  async function update2FB() {
    console.log("update2FB");
    // 同步到firebases
    await setDoc(doc(countCollection, countID), {
      value: count + 1,
    });
    setCount((count) => count + 1);
  }

  // 创建新的计数器
  // async function create2FB() {
  //   console.log("create2FB");
  //   const newCount = {
  //     value: 0,
  //   };

  //   const newCountRef = await addDoc(countCollection, newCount);
  //   console.log(newCountRef.id);
  //   setCountID(() => newCountRef.id);

  //   const docRef = doc(db, "count", countID);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setCount(() => docSnap.value);
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }
  function delete2FB() {
    console.log("delete2FB");
  }
  // useEffect(() => {
  //   readFromFB();
  // }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        {/* count is {count}
        </button> */}
        <span> count is {count}</span>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <p>firebase action:</p>
        <button className="fbBtn" onClick={readFromFB}>
          read
        </button>
        <button className="fbBtn" onClick={update2FB}>
          count + 1
        </button>
        {/* <button className="fbBtn" onClick={create2FB}>
          create
        </button> */}

        <button className="fbBtn" onClick={delete2FB}>
          delete
        </button>
      </div>
    </>
  );
}

export default App;
