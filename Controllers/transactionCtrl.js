const transaction = require('../Models/transactionModel')



//add transaction
exports.addTransaction = async (req, res) => {
  console.log("Inside Add transaction request");
  console.log(req.payload);
  console.log(req.body);
    const { category,type, amount } = req.body;
    const userId = req.payload

    try {
      const newtransaction = new transaction({ category,type,amount,userId });
      await newtransaction.save();
      res.status(200).json(newtransaction);
    } catch (err) {
      res.status(401).json(err)
    }
  }


  //get all  transaction
  // exports.getAllTransaction = async (req,res)=>{

  //   try{
  //       const allTransactions = await transaction.find()
  //       res.status(200).json(allTransactions)
  //   }catch(err){
  //       res.status(401).json(err)
 
  //   }
  // }


  //get user transactions
  exports.getUserTransaction = async (req,res)=>{
    const userId = req.payload

    try{
        const userTransactions = await transaction.find({userId})
        res.status(200).json(userTransactions)
    }catch(err){
        res.status(401).json(err)
 
    }
  }

 

  //edit transaction
  exports.editTransaction = async(req,res)=>{
    console.log("Inside edit transaction");
    const {tid} = req.params
    const userId = req.payload
    const {category,type,amount} = req.body
    try{
   const updatedTransaction = await transaction.findByIdAndUpdate(tid,{category,type,amount,userId},{new:true})
   await updatedTransaction.save()
   res.status(200).json(updatedTransaction)

    }catch(err){
        res.status(401).json(err)
 
    }
  }

  //delete transaction
  exports.deleteTransaction = async (req,res)=>{
    console.log("inside remove transaction");
    const {tid} = req.params

    try{
        const transactionDetails = await transaction.findByIdAndDelete(tid)
        res.status(200).json(transactionDetails)

    }catch(err){
        res.status(401).json(err)
    }

  }

 