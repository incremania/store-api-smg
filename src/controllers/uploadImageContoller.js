const asyncWrapper = require('../middlewares/asyncWrapper');
// const path = require('path');
// const uploadImage = async(req, res) => {
//   const productImage = req.files.image;
//   const imagePath = path.join(__dirname, '../public/uploads/' + productImage.name)
//   await productImage.mv(imagePath)
//   console.log(__dirname);
//   console.log(imagePath);
//   console.log(productImage);
//   res.status(200).json({ image: { src: '/uploads/' + productImage.name}})

// }

const path = require('path');
const cloudinary = require('cloudinary').v2

// const uploadImageLocal = asyncWrapper(async (req, res) => {
//   // check if file exist
//   // check for the MimeType
//   // check for size 1024 * 1024
//   const productImage = req.files.image;
//   const imagePath = path.join(__dirname, '../public/uploads/' + productImage.name)
//   console.log((imagePath));
//   console.log()
//   await productImage.mv(imagePath);
//   res.status(200).json({img: {src: '/uploads/' + productImage.name}})
// })

// const uploadImageSingle = asyncWrapper(async(req, res) => {
//   const productImage = req.files.image
//   const result = cloudinary.uploader.upload(productImage.tempFilePath, {
//     use_filename: true,
//     folder: 'store-api'
//   })
//   res.status(200).json({ image: {src: (await result).secure_url}})
// })

const uploadImages = asyncWrapper(async (req, res) => {
  const productImages = req.files.images; // Assuming you use 'images' as the field name for multiple images

  const uploadPromises = productImages.map(async (image) => {
    const result = await cloudinary.uploader.upload(image.tempFilePath, {
      use_filename: true,
      folder: 'store-api',
    });
    return { src: result.secure_url };
  });


  const uploadedImages = await Promise.all(uploadPromises);

  res.status(200).json({ images: uploadedImages });
});

module.exports = {
  uploadImages
};




module.exports = {
  uploadImages
}
























