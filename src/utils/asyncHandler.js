
// wrapper can done with 2 method 
// 1. Promise       2. try Catch

const asyncHandler = (requestHandler) => { 
    (req,res,next) =>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) =>next(err))
    }
}

//a wrapper function which is used  to make any normal function asynchronous. 
export {asyncHandler}

//using try catch

// const asyncHandler = (fun) => async (req, res, next) => {
//     try{
//         await fun(req,res,next);
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message : error.message || 'Server Error'
//         })
//     }
// }




//example
// const asyncHandler = (fun) => () = {}
// const asyncHandler = (fun) => async () = {}