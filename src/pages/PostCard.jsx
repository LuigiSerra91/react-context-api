import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GlobalContext from "../GlobalContec/GlobalContexts";
export default function PostCard() {
    const navigate = useNavigate()
    const [task, setTask] = useState(null)
    const { api_url } = useContext(GlobalContext)
    const { id } = useParams()
    const url = `${api_url}/post/${id}`

    useEffect(
        () => {

            fetch(url)
                .then(res => res.json())
                .then(data => {


                    const keys = Object.keys(data)
                    if (keys.includes('error')) {
                        navigate('/404')
                    } else {
                        setTask(data.data)
                    }

                })
        },
        [id])

  /*   const goToPrevious = () => {
        const previousId = parseInt(id) - 1;
        navigate(`/postlist/${previousId}`);
        if (previousId > 0) {
            setId(previousId);
            navigate(`/postlist/${previousId}`);
        }
    };

    // Funzione per navigare al post successivo
    const goToNext = () => {
        const nextId = parseInt(id) + 1;
        navigate(`/postlist/${nextId}`);
        if (nextId <= totalPosts) {
            setId(nextId);
            navigate(`/postlist/${nextId}`);
        }
    }; */


    return (

        <div className="container d-flex justify-content-center">
            {
                task ? (


                    <div className="card-group p-3">
                        <div className="card p-2">
                            <div className="img">
                                <img className="card-img-top" src={`${api_url}/${task.img}`} alt="img-anime" />
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">{task.title}</h3>
                                <p className="card-text">{task.author}</p>

                                <p className="card-text">{task.description}</p>
                            </div>

                            <Link to={"/postlist"}>
                                <button className="btn bg-primary">Back PostList</button>
                            </Link>

                            {/* <div className="mt-3">
                                <button onClick={goToPrevious} className="btn btn-secondary me-2">Previous</button>
                                <button onClick={goToNext} className="btn btn-secondary">Next</button>
                            </div> */}

                        </div>
                    </div>


                ) : (
                    <div>loading...</div>

                )
            }
        </div>

    )
}

