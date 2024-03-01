const fs = require("fs");

const gemsData = [
  {
    id: 111836,
    imageUrl:
      "https://instagram.fpow1-2.fna.fbcdn.net/v/t51.2885-19/241932218_573276907352779_3547078858993760905_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fpow1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=IzYvOXjn9H8AX_OY3rs&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBMqanW_3Z5Sat16pzB4D73kwMOpI-n_VWS4QYZwks9NQ&oe=65E80B18&_nc_sid=8b3546",
  },
  {
    id: 111831,
    imageUrl:
      "https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-19/427601205_796781895798113_623446656916182026_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=1&_nc_ohc=AfDFQiFEBsUAX_G6pZq&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBRjTof6f7Zy1InWkZwddhSHe2vtLvFH05TkvMob1DPxQ&oe=65E7B0CB&_nc_sid=8b3546",
  },
];

const getNewUrl = async (url) => {
  const sessionToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk5LCJpYXQiOjE3MDkyOTQwNzcsImV4cCI6MTcxMTg4NjA3N30.NatU5N10vYjx7Y6dVa9vrExwbB1FlT50haxhhgzDZxE";

  const apiUrl = "https://api.curateit.com";
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      const payload = {
        base64: dataURL,
      };
      fetch(`${apiUrl}/api/upload-base64-img`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify(payload),
      })
        .then((resp) => {
          return resp.json();
        })
        .then((response) => {
          resolve(response.message);
        })
        .catch((error) => {
          resolve(false);
        });
    };
    img.onerror = () => {
      resolve(false);
    };
    img.crossOrigin = "anonymous";
    img.src = url;
  });
};

// Function to update each item with a new imageUrl
async function updateGemsData(gemsData) {
  const updatedGemsData = await Promise.all(
    gemsData.map(async (item) => {
      const newImageUrl = await getNewUrl(item.imageUrl);
      return { ...item, imageUrl: newImageUrl };
    })
  );

  return updatedGemsData;
}
// Function to save updated gems data to a JSON file
function saveUpdatedGemsDataToFile(updatedGemsData, filePath) {
  fs.writeFile(filePath, JSON.stringify(updatedGemsData, null, 2), (err) => {
    if (err) {
      console.error("Error saving the updated gems data to file:", err);
    } else {
      console.log(`Updated gems data successfully saved to ${filePath}`);
    }
  });
}

// Call the update function and handle the updated data
updateGemsData(gemsData)
  .then((updatedData) => {
    // Assuming you want to save the data to 'updatedGemsData.json'
    saveUpdatedGemsDataToFile(updatedData, "updatedGemsData.json");
  })
  .catch((error) => {
    console.error("Error updating gems data:", error);
  });
