const router = require("express").Router();
const blog = require("../models/models")

//Post
router.post('/post', async(request, response) => {
    try {
        const {title, description}= request.body;
        const newpost = new blog({title, description});
         await newpost .save().then(()=> response.status(200).json({message:"data is saved succesfully"}))
        
    } catch (error) {
        response.status(400).json({message:"some error has been occured"})
    }
     
});
//get posts
router.get('/getposts', async (request, response) => {
    try {
      const allPosts = await blog.find().sort({createdAt:-1});
      response.status(200).json({data:allPosts});
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Internal server error" });
    }
  });


  router.get('/recent-posts', async (request, response) => {
    try {
      const recentPosts = await blog.find().sort({ createdAt: -1 }).limit(3);
      response.status(200).json({data:recentPosts});
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Internal server error" });
    }
  });

// get by id
  router.get('/getblog/:id', async (request, response) => {
    try {
      const {id} = request.params;
  
      const data = await blog.findById(id);
  
      if (!data) {
        return response.status(404).json({ message: "Blog not found" });
      }
  
      response.status(200).json({data:data});
    } catch (error) {
      //console.error(error);
      response.status(400).json({ message: "Internal server error" });
    }
  });
   // update by id 

   router.put('/update-blog/:id', async (request, response) => {
    try {
      const { id } = request.params;
      const { title, description } = request.body;
  
      const updateblog = await blog.findByIdAndUpdate(id, { title, description }, { new: true });
  
      if (!updateblog) {
        return response.status(404).json({ message: "Blog not found" });
      }
  
      response.status(200).json({ message: "Blog updated successfully", data: updateblog });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Internal server error" });
    }
  });



  // Delete a blog post by ID
// router.delete('/delete-blog/:id', async (request, response) => {
//     try {
//       const { id } = request.params;
//       const deletedBlog = await blog.findByIdAndDelete(id);
  
//       if (!deletedBlog) {
//         return response.status(404).json({ message: "Blog not found" });
//       }
  
//       response.status(200).json({ message: "Blog deleted successfully", data: deletedBlog });
//     } catch (error) {
//       console.error(error);
//       response.status(500).json({ message: "Internal server error" });
//     }
//   });
  
  module.exports = router;
  



module.exports= router;










// code master se sikha huu