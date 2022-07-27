import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../components/Post'

export default function BlogSingle() {
    const { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
    }, [id])

    return (
        <Post post={post} hideLink={true} />
    )
}