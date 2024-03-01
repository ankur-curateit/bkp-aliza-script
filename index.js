const axios = require("axios");
const fs = require("fs").promises; // Use fs.promises for async/await support
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
  {
    id: 111837,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327405625.png",
  },
  {
    id: 111826,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327398961.png",
  },
  {
    id: 111829,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327408903.png",
  },
  {
    id: 111828,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407637.png",
  },
  {
    id: 111835,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327399263.png",
  },
  {
    id: 111832,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327397907.png",
  },
  {
    id: 111838,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409166.png",
  },
  {
    id: 111839,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406983.png",
  },
  {
    id: 111834,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327405163.png",
  },
  {
    id: 111842,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327404927.png",
  },
  {
    id: 111843,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409100.png",
  },
  {
    id: 111846,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406919.png",
  },
  {
    id: 111845,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327400491.png",
  },
  {
    id: 111847,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406852.png",
  },
  {
    id: 111841,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406446.png",
  },
  {
    id: 111848,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409886.png",
  },
  {
    id: 111849,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406149.png",
  },
  {
    id: 111853,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407833.png",
  },
  {
    id: 111851,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407108.png",
  },
  {
    id: 111858,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409315.png",
  },
  {
    id: 111855,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327405008.png",
  },
  {
    id: 111854,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409028.png",
  },
  {
    id: 111857,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409636.png",
  },
  {
    id: 111852,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407502.png",
  },
  {
    id: 111856,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327408091.png",
  },
  {
    id: 111825,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327408025.png",
  },
  {
    id: 111885,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407039.png",
  },
  {
    id: 111884,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406546.png",
  },
  {
    id: 111888,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327408845.png",
  },
  {
    id: 111889,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327405846.png",
  },
  {
    id: 111887,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409758.png",
  },
  {
    id: 111886,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327405495.png",
  },
  {
    id: 111890,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409693.png",
  },
  {
    id: 111893,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327405350.png",
  },
  {
    id: 111891,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327405559.png",
  },
  {
    id: 111895,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407168.png",
  },
  {
    id: 111840,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407576.png",
  },
  {
    id: 111894,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409451.png",
  },
  {
    id: 111896,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327408154.png",
  },
  {
    id: 111898,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409394.png",
  },
  {
    id: 111906,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327405417.png",
  },
  {
    id: 111904,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409989.png",
  },
  {
    id: 111899,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410113.png",
  },
  {
    id: 111902,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409815.png",
  },
  {
    id: 111909,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327408697.png",
  },
  {
    id: 111903,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407301.png",
  },
  {
    id: 111901,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327408524.png",
  },
  {
    id: 111897,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327401621.png",
  },
  {
    id: 111907,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327405093.png",
  },
  {
    id: 111892,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327399752.png",
  },
  {
    id: 111908,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407369.png",
  },
  {
    id: 111912,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406775.png",
  },
  {
    id: 111905,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410337.png",
  },
  {
    id: 111921,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409515.png",
  },
  {
    id: 111913,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406378.png",
  },
  {
    id: 111914,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407243.png",
  },
  {
    id: 111915,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410179.png",
  },
  {
    id: 111919,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406304.png",
  },
  {
    id: 111911,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410571.png",
  },
  {
    id: 111923,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409236.png",
  },
  {
    id: 111918,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327408765.png",
  },
  {
    id: 111924,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406212.png",
  },
  {
    id: 111917,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327408968.png",
  },
  {
    id: 111920,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407703.png",
  },
  {
    id: 111926,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406692.png",
  },
  {
    id: 111927,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327406617.png",
  },
  {
    id: 111925,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327409572.png",
  },
  {
    id: 111910,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410054.png",
  },
  {
    id: 111922,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407956.png",
  },
  {
    id: 111900,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407893.png",
  },
  {
    id: 111859,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410649.png",
  },
  {
    id: 111867,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410765.png",
  },
  {
    id: 111864,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327411061.png",
  },
  {
    id: 111865,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410915.png",
  },
  {
    id: 111860,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327411416.png",
  },
  {
    id: 111868,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327411637.png",
  },
  {
    id: 111863,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410982.png",
  },
  {
    id: 111861,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327411785.png",
  },
  {
    id: 111872,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410447.png",
  },
  {
    id: 111878,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327848710.png",
  },
  {
    id: 111874,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327847905.png",
  },
  {
    id: 111879,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327850845.png",
  },
  {
    id: 111881,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327849968.png",
  },
  {
    id: 111880,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327849905.png",
  },
  {
    id: 111882,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327849244.png",
  },
  {
    id: 111866,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327851711.png",
  },
  {
    id: 111875,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327849573.png",
  },
  {
    id: 111870,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327848984.png",
  },
  {
    id: 111873,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327851129.png",
  },
  {
    id: 111876,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327848914.png",
  },
  {
    id: 111871,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327848848.png",
  },
  {
    id: 111869,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327850148.png",
  },
  {
    id: 111844,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709328064788.png",
  },
  {
    id: 111850,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709328065202.png",
  },
  {
    id: 111862,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709328065570.png",
  },
  {
    id: 111877,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709328064941.png",
  },
];

const fetchGemDetails = async (gem) => {
  try {
    const response = await axios.get(
      `https://api.curateit.com/api/gems/${gem.id}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${sessionKey}`,
        },
      }
    );

    const { title, description, url, is_favourite, platform } =
      response.data.data.attributes;
    const imageUrl = gem.imageUrl; // Use the imageUrl from the gemsData matching the id

    return getPayload(
      title,
      description,
      url,
      is_favourite,
      imageUrl,
      platform
    );
  } catch (error) {
    console.error("Error fetching gem details:", error);
    return null;
  }
};

const main = async () => {
  const results = [];

  for (const gem of gemsData) {
    const details = await fetchGemDetails(gem);
    if (details) {
      results.push(details);
    }
  }

  // Convert the results to a JSON string
  const resultJSON = JSON.stringify(results, null, 2); // Pretty print the JSON

  // Save the JSON to a file
  try {
    await fs.writeFile("gemDetails.json", resultJSON);
    console.log("The file has been saved!");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

main();

const getPayload = (
  title,
  description,
  url,
  is_favourite,
  imageUrl,
  platform
) => {
  const payload = {
    data: {
      title: title,
      description: description,
      media_type: "Profile",
      author: 199,
      url: url,
      metaData: {
        url: url,
        icon: "",
        type: "Profile",
        title: title,
        covers: [imageUrl],
        defaultIcon: "",
      },
      collection_gems: 5228,
      remarks: "",
      tags: [],
      is_favourite: is_favourite,
      custom_fields_obj: [],
      media: {
        covers: [imageUrl],
      },
      platform: platform,
      expander: [],
    },
  };
  return payload;
};
