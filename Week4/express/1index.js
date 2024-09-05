const express = require("express")

function calculateSum(n) {
    let ans = 0;
    for(let i = 0; i <= n; i++) {
        ans += i;
    }

    return ans;
}

// creating an instance of the 'exress'.
const app = express();

// req - request.
// res - result.
app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send(ans.toString());
})

// port to listen(to recieve input).
app.listen(3000);

/*
    to run it
      > run 'node 1index.js' in your local terminal.
      > open chrome and eun 'localhost:3000/?n=10'.
        here '?' is a query parameter, and the following thing is the input value.
*/
