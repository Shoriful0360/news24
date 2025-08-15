
const fetchNews=async(search,category)=>{
    try{
        const response=await fetch(`/newsJsonfile.json?category=${category}&search=${search}`)

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data=await response.json()
        return data
    }catch(error){
        console.error("Error fetching news data",error)
        return[]
    }
}

export default fetchNews