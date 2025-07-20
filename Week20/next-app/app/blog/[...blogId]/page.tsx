// params is promise so it should be awaited.
export default async function BlogPost({params}: any) {
    // here 'blogId' is the name of the [slug].
    const postId = (await params).blogId;         // blogId is an array

    return <div>
        BlogPost {JSON.stringify(postId)}         {/* to print array first we strigify it*/}
    </div>
}