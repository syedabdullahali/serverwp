const express =  require('express')
const mongoes =  require('mongoose')
const app = express()
app.use(express.json())

const template = require("./model/page");
const templateProduct = require("./model/productSchema");
const layout = require("./model/layout");
const section = require("./model/section");
const user = require("./model/user");


const getTemplate = async (req, res) => {
  try {
    const { domain } = req.params;
    const product = await templateProduct.findOne({ domain });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

const getAllModelNames = () => {
  layout
  section
  user
};
    const productIdString = product._id.toString();
    const page =  template.find({productId:productIdString }).populate("sections").populate({
      path: 'layout',
      populate: {
        path: 'data.component',
        model: 'section'
      }
    });

    const data = await Promise.all([product,page])
    getAllModelNames();
    res.status(200).json({ success: true, pageNevigation: data[0], pages: data[1] });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// module.exports = { getTemplate };


// const getTemplate = async (req, res) => {
//     try {
//       const {domain} = req.params;


//       const product = await  templateProduct.findOne({domain})
//       console.log(product._id.toString(),"dsnjndfkjds")

//       const page = await  template.find({productId:(product._id.toString())}).populate("sections").populate({
//         path: 'layout',
//         populate: {
//           path: 'data.component',
//           model: 'section'
//         }
//       });
      
//       const data = [product,page]
//       console.log(data.toString(),"dsnjndfkjds")

      
//       res.status(200).json({ success: true, pageNevigation:data[0],pages:data[1] });
//     } catch (error) {
//       res.status(500).json({ error: error });
//     }
//   };

    app.get("/get-web-preview/:domain", getTemplate)
 
    mongoes.connect(process.env.MONGO_URL)    
    .then(()=>{
        app.listen(4000,()=>{
            console.log(4000)
        })
    })
