const Agency = require("../model/Agency");
const Client = require("../model/Client");
const addClientAgency = async (req, res) => {
  try {
    const {
      agency_id,
      agency_name,
      address1,
      state,
      city,
      agency_phone_number,
      client_name,
      email,
      client_phone_number,
      total_bill,
      client_id,
    } = req.body;
    const result1 = await Agency.create({
      agency_id,
      agency_name,
      address1,
      address2: "",
      state,
      city,
      phone_number: agency_phone_number,
    });

    const result2 = await Client.create({
      client_name,
      email,
      phone_number: client_phone_number,
      total_bill,
      client_id,
      agency_id,
    });

    res.status(201).json({ result1, result2 });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateClient = async (req, res) => {
  try {
    const { client_id, client_name, email, phone_number, total_bill } =
      req.body;
    const result = await Client.updateOne(
      { client_id },
      {
        client_name,
        email,
        phone_number,
        total_bill,
      }
    );

    res.status(201).json({ result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getdetails = async (req, res) => {
  try {
    const result = await Agency.aggregate([
      {
        $lookup: {
          from: "clients",
          localField: "client_id",
          foreignField: "agency_id",
          as: "client_details",
        },
      },
      { $unwind: "$client_details" },
      {
        $project: {
          _id: 0,
          agency_name: 1,
          client_name: "$client_details.course_name",
          total_bill: "$client_details.course_score",
        },
      },
    ]);

    res.status(200).json({ result });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  addClientAgency,
  updateClient,
  getdetails,
};
