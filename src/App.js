import React, { useEffect, useState } from "react";
import Tmdb from  './Tmdb';

export default () => {

  const[movieList, setMovieList] = useState ([]);

  useEffect (()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      
    </div>
  );
}