"use client";

import React, { useState } from "react";
import CodeEditor from "./editor";
import Response from "./response";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("react-monaco-editor"), {
  ssr: false,
});

const Main: React.FC = () => {
  const [code, setCode] = useState<string>("// here you can write code in any language");
  const [res, setRes] = useState<string>("// this is your output section do not change any thing");
  const [targLang, setTargLang] = useState<string>("");
  const [loding,setLoding] = useState(false)

  const handlConvert = async () => {
    if (targLang === "") {
      alert("select your Targeted Language");
      return;
    } else if (code === "// here you can write code in any language"||code==="") {
      alert("please write the code");
      return;
    }

    setLoding(true)

    const data = await Response({
      data: code,
      url: "/convert",
      targetLang: targLang,
    });
    setLoding(false)
    setRes(data.convertedCode);
  };

  const handleDebug = async () => {
    if (targLang === "") {
      alert("select your Targeted Language");
      return;
    } else if (code === "// here you can write code in any language"||code==="") {
      alert("please write the code");
      return;
    }
    setLoding(true)

    const data = await Response({
      data: code,
      url: "/debug",
      targetLang: targLang,
    });
    setLoding(false)

    setRes(data.debugOutput);
  };

  const handleQty = async () => {
    if (targLang === "") {
      alert("select your Targeted Language");
      return;
    } else if (code === "// here you can write code in any language"||code==="") {
      alert("please write the code");
      return;
    }
    setLoding(true)

    const data = await Response({
      data: code,
      url: "/quality",
      targetLang: targLang,
    });
    setLoding(false)
    setRes(data.qualityCheckOutput);

  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div className="flex justify-between w-6/12 m-auto mt-9">
        <button
          onClick={handlConvert}
          className="flex-2 w-32 text-white font-bold h-12 bg-blue-500 hover:bg-blue-700 rounded-xl"
        >
          Convert
        </button>
        <button
          onClick={handleDebug}
          className="flex-2 w-32 text-white font-bold h-12 bg-blue-500 hover:bg-blue-700 rounded-xl"
        >
          Debug
        </button>
        <button
          onClick={handleQty}
          className="flex-2 w-32 text-white font-bold h-12 bg-blue-500 hover:bg-blue-700 rounded-xl"
        >
          Check QTY
        </button>
        <select
          onChange={(e) => setTargLang(e.target.value)}
          placeholder="select Target Lang"
          className="flex-2 w-120 text-white font-bold h-12 bg-teal-500 hover:bg-teal-700 rounded-xl"
        >
          <option value={""}>Select Target Lang</option>
          <option value={"javascript"}>javascript</option>
          <option value={"python"}>python</option>
          <option value={"java"}>java</option>
          <option value={"php"}>php</option>
        </select>
      </div>
      <div>
        {
            loding?<h1 style={{fontSize:"30px",color:"red"}}>Process is running...</h1>:""
        }
      </div>
      <div className="flex justify-between mt-7 gap-7">
        <div className="flex-15 w-1/2">
          <CodeEditor value={code} language="javascript" onChange={setCode} />
        </div>
        <div
          style={{ }}
          className="flex-2 w-1/2"
        >
          <MonacoEditor
            width={"auto"}
            height="600"
            language={"text"}
            theme={"vs-dark"}
            value={res}
            
            options={{
              minimap: { enabled: true },
              fontFamily: "Fira Code, monospace",
              readOnly:true,
              wordWrap: 'on',
              fontSize: 19,
            }}
          />
        </div>
      </div>

    </div>
  );
};

export default Main;
