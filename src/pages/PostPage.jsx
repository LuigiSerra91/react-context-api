import React, { useState, useEffect, useContext} from 'react';
import AddCanvas from "../components/AddCanvas";
import AppCard from "../components/AppCard";
import PostList from '../components/PostList'
import GlobalContext from '../GlobalContec/GlobalContexts';
const initialFormdata = {
  title: '',
  author: '',
  img: '',
  description: '',
  category: ''

}



export default function PostPage() {

  const [task, setTask] = useState([])
  const [formData, setFormData] = useState(initialFormdata)
 const { api_url} = useContext(GlobalContext)
  function fetchData(url = `${api_url}/post`) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTask(data)


      })
  }

  useEffect(fetchData, [])

  function handlerDeleteTask(e) {
    e.preventDefault()
    console.log(e.target.getAttribute('data-id'));

    const id = e.target.getAttribute('data-id')
    fetch(`${api_url}/post/${id}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        setTask(res);


      })
  }

  function handleSearchForm(e) {
    e.preventDefault()
    //alert('Form sent')
  }



  function handleFormSubmit(e) {
    e.preventDefault()
    console.log('Form sent', formData);


    const newPost = {
      title: formData.title,
      author: formData.author,
      img: formData.img,
      description: formData.description,

    };


    fetch(`${api_url}/post`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Post added', data);



        setFormData(initialFormdata);
        fetchData();
      })
      .catch(err => {
        console.error('Error adding post', err);
      })
  }


  function handleFormField(e) {
    //console.log(e.target);

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }




  return (
    <>
      <AddCanvas handleFormSubmit={handleFormSubmit} handleFormField={handleFormField} formData={formData} />

      <PostList>
        {task.data ? task.data.map(post => <div className="col-4 p-3" key={post.id}>

          <AppCard key={post.id} handlerDeleteTask={handlerDeleteTask} post={post} />

        </div>) : <p>no result</p>}

      </PostList>







    </>
  )
}