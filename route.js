const express =require('express');

const route= require('./routes/index')
const app =express()


const PORT =process.env.PORT || 3000

app.listen(PORT,()=>
    
    {
         console.log(`server is running at ${PORT}`);

    })


app.use('/api/pet', route)