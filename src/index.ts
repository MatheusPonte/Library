require('express-async-errors')
const app = require('./routes/routes.ts');
const port: number = 8080;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
});

