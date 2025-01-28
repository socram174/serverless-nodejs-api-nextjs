'use client';
import { useState } from "react";

export default function Home() {
  const [data, setData ] = useState('');

  const handleClick = async (e)=>{
    if(data !== ''){
      setData('');
    }
    //console.log(e);
    const response = await fetch('/api/leads',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: "test@vercel.com"})
    });
    setData(await response.json());
  }

  const handleCreate = async (e)=>{
    if(data !== ''){
      setData('');
    }
    //console.log(e);
    const response = await fetch('/api/leads');
    setData(await response.json());
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello v2</h1>
      <button onClick={handleCreate} className="bg-green-400">Press Me</button>
      {data && JSON.stringify(data)}
    </div>
  );
}
