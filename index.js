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
    id: 111867,
    imageUrl:
      "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327410765.png",
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
