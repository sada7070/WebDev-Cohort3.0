function App() {
  return (
   <div style={{backgroundColor: "#d9d9d9", height: "100vh" }}>
    <div style={{display: "flex", justifyContent: "center", paddingTop: 20}}>
      <div>
        <div>
          <PostCard></PostCard>
          <br />
        </div>
        <div>
          <PostCard></PostCard>
          <br />
        </div> 
        <div>
          <PostCard></PostCard>
          <br />
        </div> 
      </div>
    </div>
   </div>
  )
}

const style = { width: 220, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

function PostCard() {
  return <div style={style}>
    <div style={{display: "flex"}}>
      <img src={"https://marketplace.canva.com/EAFuJ5pCLLM/1/0/1600w/canva-black-and-gold-simple-business-man-linkedin-profile-picture-BM_NPo97JwE.jpg"}
      style={{
        borderRadius: 25,
        width: 40,
        height: 40
      }}></img>
      <div style={{fontSize: 10 , marginLeft: 10}}>
        <b>100xdevs</b>
        <div> 12,000 followers </div>
        <div> 30m </div>
      </div>
    </div>
    Hi everyone! this is my first post.
    Let's connect!!!.
  </div>
}

export default App
