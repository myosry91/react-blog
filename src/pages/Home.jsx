import { useCallback, useEffect, useState } from "react";
import HeroHome from "../component/HeroHome";
import Blogs from "../component/Blogs";

const Home = () => {
    const [data, setData]= useState([])
   
    const fetchData = useCallback(
      async() => {
        const response = await fetch("http://localhost:3001/posts");
        const json =  await response.json()
        setData(json)
      },
      [],
    )
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <section>
      <HeroHome />
      <div className="p-5">
        <Blogs data={data} />
      </div>
    </section>
  );
};

export default Home;
