const apiReq= async (url="",options="",errMessage=null)=>{
    try{
        const response=await fetch(url,options)
        if (!response.ok) throw Error("please reload the app")
    }
    catch(err){
        errMessage=err.message;
    }
    finally{
        return errMessage;
    }
}
export default apiReq