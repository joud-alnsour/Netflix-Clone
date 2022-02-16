import React, { useEffect,useState } from "react";
import MovieList from "../MovieList/MovieList";
import{Row,Container} from "react-bootstrap";
function Home() {
    const [movie, setmovie] = useState();

    const fetchData = async () => {
        try {
            const List = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=b300cdefad7adfd65b734dc5211bfd15`)

            const List2 = await  List.json();
            let newResult =[];
            for(let x of List2.results){
                x['caption']=''
                x['iscaption']=false
                newResult.push(x)

            }
            setmovie(List2.results);
            console.log(List2);

        } catch (error) {
            console.log("error", error);
        }

    };
    const updateCaptions =(List2,id) =>{
        let updated =movie.map(move =>{
            if (movie.id===id){
                movie.caption=List2.userCaption;
                movie.iscaption=!movie.iscaption;
                return movie;
            }
            else return movie
        })
        setmovie(updated);
    }
    useEffect(() => { fetchData(); }, []);


    return (
        <div>
            home {movie &&(<Container fluid id="main container">
                <Row id="fiex-row">
                    <MovieList movies={movie} updateCaptions={updateCaptions}/>
                </Row>
            </Container>)}
            <h1>Home Page</h1>

            
        </div>
    )
}
export default Home;