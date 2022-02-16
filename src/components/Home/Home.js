import React, { useEffect,useState } from "react";
import MovieList from "../MovieList/MovieList";
import{Row,Container} from "react-bootstrap";
function Home(props) {
    const [film, setfilm] = useState();

    const fetchData = async () => {
        try {
            const List1 = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=b300cdefad7adfd65b734dc5211bfd15`)

            const List2 = await  List1.json();
            let newResult =[];
            for(let x of List2.results){
                x['caption']=''
                x['iscaption']=false
                newResult.push(x)

            }
            setfilm(List2.results);

        } catch (error) {
             
        }

    };
    const updateCaptions =(List2,id) =>{
        let updated =film.map(move =>{
            if (film.id===id){
                film.caption=List2.userCaption;
                film.iscaption=!film.iscaption;
                return film;
            }
            else return film
        })
        setfilm(updated);
    }
    useEffect(() => { fetchData(); }, []);


    return (
        <div>
           {film &&(<Container fluid >
                <Row>
                    
                    <MovieList 
                    addComment={props.addComment}
                    movies={film} updateCaptions={updateCaptions}/>
                </Row>
            </Container>)}
            

            
        </div>
    )
}
export default Home;