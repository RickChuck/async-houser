module.exports = {
    getHouses: (req, res, next) => {
      const dbInstance = req.app.get("db");

      dbInstance.get_houses()
        .then(houses => {
          res.status(200).send(houses);
        })
        .catch(error => {
          console.log(error);
          res.status(500).send(error);
        });
    },
    addHouse: (req, res, next) => {
      const dbInstance = req.app.get("db");
      const {
        name: house_name,
        address: house_address,
        city: city,
        state: house_state,
        zip: zip_code,
        img,
        mortgage: mortgage,
        rent: rent
      } = req.body;

      dbInstance.add_house(
          house_name,
          house_address,
          city,
          house_state,
          zip_code,
          img,
          mortgage,
          rent
        ).then(() => {
          res.sendStatus(200);
        })
        .catch(error => {
          res.status(500).send(error);
          console.log(error);
        });
    },
    deleteHouse: async (req, res, next) => {
      const dbInstance = req.app.get("db");
      const { house_id } = req.params;
  
      await dbInstance.delete_houses([house_id])
        .then(() => res.sendStatus(200))
        .catch(error => {
          console.log("did not delete", error);
          res.status(500).send(error, { errorMessage: "error at deleteProduct" });
        });
    }
};