const isNext = (size,cant,page) => {
    return Math.ceil(cant/size)>page
  };

  const isPrev=(prev,startIndex,cant)=>{
    return prev>0 && startIndex<cant
  };


  const messages =(cant,page,startIndex,size,route)=>{
    
    const prevPage=page - 1
    const nextPage = page + 1
    if (isNext(size,cant,page) && isPrev(prevPage,startIndex,cant) ){
            return(`Next page: http://localhost:3000/${route}/pagination?page=${nextPage}, Previous page:http://localhost:3000/categories/pagination?page=${prevPage}`)
      }
    if(!isNext(size,cant,page) && isPrev(prevPage,startIndex,cant) ){
        return(`Previous page:http://localhost:3000/${route}/pagination?page=${prevPage}`)
      }
    if(isNext(size,cant,page) && !isPrev(prevPage,startIndex,cant) ){
        return(`Next page: http://localhost:3000/${route}/pagination?page=${nextPage}`)
 
      }
     
  }

  module.exports={messages,isPrev,isNext}
