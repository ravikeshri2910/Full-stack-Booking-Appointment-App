
const BookingData = require('../models/bookingData')


exports.postAddBooking = async (req, res, next) => {
    try {

        // console.log("req.body" + req.body.name)
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;

        // console.log(name, email, phone)

        let data = await BookingData.create({
            name: name,
            email: email,
            phone: phone

        })
        // console.log(result)
        console.log('Product ceated')
        res.status(201).json({ userdetails: data })
        // res.redirect('/');

    } catch (err) { console.log(err) }
}


exports.getBooking = async(req, res)=>{

    BookingData.findAll()
    .then(data => {
        res.status(201).json({ userdetails: data })
    })
    .catch(err => {
      console.log(err);
    });
}

exports.deleteBooking = async(req , res) =>{
    let dataId = req.params.id;
    console.log("id-"+ typeof(+dataId))
    BookingData.destroy({where : {id : (+dataId)}})
    .then(result => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/user/add-user');
    })
    .catch(err => console.log(err));
}
