import React, { useEffect,useState } from "react";
import MovieList from "../MovieList/MovieList";
function Home() {
    const [x, setx] = useState();

    const fetchData = async () => {
        try {
             
            const List = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=b300cdefad7adfd65b734dc5211bfd15")
 
            const List2 = await  List.json();
            setx(List2.results)
            console.log(List2)
 

        } catch (error) {
            console.log("error", error);
        }

    }
    
    useEffect(() => { fetchData(); }, [])


    return (
        <>
            <h1>Home Page</h1>

            <MovieList MovieData={x}/>
        </>
    )
}
export default Home