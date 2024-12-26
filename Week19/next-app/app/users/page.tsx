// data fetching in Nextjs(using SSR(Server Side Rendering))
import axios from "axios"

// useEffect talks with client(browser) without the server, so we will unable to get nextjs benifits.
// but this method directly talks with server not with client(browser)
export default async function Users() {
    const response = await axios.get("http://localhost:3000/api/v1/user/details")
    const data = response.data;

    await new Promise(r => setTimeout(r, 5000));
    return <div>
        user page
        <br></br>
        {data.name}
        {data.email}
    </div>
}