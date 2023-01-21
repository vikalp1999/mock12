
exports.invest=async(req,res)=>{
    console.log(req.params)
   let P=req.params.P;
   let i= req.params.i;
   let n= req.params.n;
   let F= P*[(((1+i) ^n)-1)/i]
   let investamount=P*n;
   let totalIns=F-investamount
   
   res.status(201).send({messsage:"true","F":F,totalIns})
}