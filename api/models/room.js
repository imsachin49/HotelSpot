const mongoose = require("mongoose");
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [
        { 
            number: Number, 
            unavailableDates: {
                type: [Date]
            }
        }
    ],
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
  },
  { timestamps: true }
);

// roomNumbers:[
//   {number:101, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
//   {number:102, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
//   {number:103, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
//   {number:104, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
//   {number:105, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
//   {number:106, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
//   {number:107, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
//   {number:108, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
//   {number:109, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
//   {number:110, unavailableDates:[01.02.2023, 02.02.2023, 03.02.2023]},
// ]

module.exports = mongoose.model("Room", RoomSchema);
