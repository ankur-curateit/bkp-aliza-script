const axios = require("axios");
const sessionKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk5LCJpYXQiOjE3MDkyOTQwNzcsImV4cCI6MTcxMTg4NjA3N30.NatU5N10vYjx7Y6dVa9vrExwbB1FlT50haxhhgzDZxE";

const gemsData = [
  {
    id: 111836,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407435.png",
  },
  {
    id: 111831,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407766.png",
  },
];

const getPayload = (
  title,
  desc,
  url,
  is_favourite,
  newImgUrl,
  platform
) => {
  const payload = {
    data: {
      title: title,
      description: desc,
      media_type: "Profile",
      author: 199,
      url: url,
      metaData: {
        url: url,
        icon: "",
        type: "Profile",
        title: title,
        covers: [newImgUrl],
        defaultIcon: "",
      },
      collection_gems: 5228,
      remarks: "",
      tags: [],
      is_favourite: is_favourite,
      custom_fields_obj: [],
      media: {
        covers: [newImgUrl],
      },
      platform: platform,
      expander: [],
    },
  };
  return payload;
};
