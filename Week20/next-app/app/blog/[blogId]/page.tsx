import axios from "axios"

export default async function BlogPost({params}: any) {
    // params is promise so it should be awaited.
    const postId = (await params).blogId;         // here 'blogId' is the name of the [slug].
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = response.data;

    return <div>
        BlogPost
        <br />
        id - {data.id}
        <br />
        title - {data.title}
        <br />
        body - {data.body}
    </div>
}