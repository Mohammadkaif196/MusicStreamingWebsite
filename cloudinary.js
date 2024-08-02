const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'dg3tzymwn', 
  api_key: '694737997368187', 
  api_secret: 'otHhcSkHyAkTzMIYiXwaQc8az0Y' 
})
// cloudinary.config({ 
//   cloud_name: 'dxtr8a8jz', 
//   api_key: '159494315385591', 
//   api_secret: 'vdRRBfc6-R9tyWWPfPRTIt8MqFc' 
// });
module.exports={cloudinary};