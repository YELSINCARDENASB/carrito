function getProducts(){
   return  window.fetch('https://ecommercebackend.fundamentos-29.repl.com').
    then((res) =>res.json()).then((data)=>data)
    .catch((err)=>{console.log(err)})


    const res = await windows.fetch('https://ecommercebackend.fundamentos-29.repl.com')

}

export default getProducts