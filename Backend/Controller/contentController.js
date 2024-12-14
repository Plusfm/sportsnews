const Content = require('../Model/contentModel')
const fs= require('fs')

exports.contentpost=async(req,res)=>{
    //   console.log(req.body)
    try{ 
        const {title,category, image,description,type,group, Date }=req.body
        const newContent = new Content({ title,category, image,description,type,group, Date})
        await newContent.save()
        res.status(201).json({message:"content posted successfully"})
    }catch(err){
        res.status(500).json({message:err.message})}

};

exports.contentget=async (req,res)=>{
    let filter ={}
    try{
        if(req.query.category){
            filter.category =req.query.category
        }
        const contents = await Content.find(filter)
        res.status(200).json({message:"You have successfully displayed the content",contents})

    }catch(err){
        console.log(err)
        res.status(500).json({message:err.message})}
        // res.status(404).json({message:"error", err})}
        
}

exports.contentgetid=async (req,res)=>{

    try{
        const {id}=req.params
        const content = await Content.findById(id)
        res.status(200).json({message:"You have successfully displayed a content",content})

    }catch(err){
        res.status(404).json({message:"error", err})}
}

exports.contentgetcategoryid=async (req,res)=>{

    try{
        const Category=req.query
        const content = await Content.find({category:Category})
        res.status(200).json({message:"You have successfully displayed  content",content})

    }catch(err){
        res.status(404).json({message:"error", err})}
}
exports.contentgetgroupid=async (req,res)=>{

    try{
        const Group=req.query
        const content = await Content.find({group:Group})
        res.status(200).json({message:"You have successfully displayed content",content})

    }catch(err){
        res.status(404).json({message:"error", err})}
}


exports.contentupdate=async(req,res)=>{
    
    try{
        const {id}=req.params
        const contentupdated = await Content.findByIdAndUpdate(id,req.body, {new:true})
        res.status(200).json({message:"You have successfully updated a content",contentupdated})
    }catch(err){
        res.status(404).json({message:"error", err})}
}

exports.contentdelete=async(req,res)=>{
    
    try{
        const {id}=req.params
        const contentupdated = await Content.findByIdAndDelete(id)
        res.status(200).json({message:"You have successfully deleted a content",contentupdated})
    }catch(err){
        res.status(404).json({message:"error", err})}
}

exports.contentdev= async (req,res)=>{
  
        try {
          const newContent = JSON.parse(
            fs.readFileSync(`${__dirname}/data.json`, 'utf-8')
          );
          await Content.create(newContent);
          console.log('data loaded successfull');
          res.send('data loaded successfull');
        } catch (error) {
          console.log(error);
          res.send(error);
        }
      
}



