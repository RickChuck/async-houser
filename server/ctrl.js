module.exports = {
  getHouses: (req, res) => {
      const db = req.app.get('db');
      db.getListings(req.session.userId).then(listings => res.send(listings));
      console.log(req.body)
  },
  create: (req, res) => {
      console.log(req.body)
      const db = req.app.get('db');
      const {property_name, property_descrip, address, city, myState, zip, img_url, loan_amount, monthly_mortgage, desired_rent} = req.body
      db.makeListing([property_name, property_descrip, address, city, myState, zip, img_url, loan_amount, monthly_mortgage, desired_rent, req.session.userId]).then(listing => res.send(listing))

  },
  remove: (req, res) => {
      console.log(55, req.params.id, req.session.userId)
      const db = req.app.get('db');
      const {id} = req.params
      db.removeListing([id, req.session.userId]).then(listings => res.send(listings))
  }
}