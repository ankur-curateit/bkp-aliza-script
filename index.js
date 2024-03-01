const axios = require("axios");
const fs = require("fs");
const sessionKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk5LCJpYXQiOjE3MDkyOTQwNzcsImV4cCI6MTcxMTg4NjA3N30.NatU5N10vYjx7Y6dVa9vrExwbB1FlT50haxhhgzDZxE";

// Define the URL and the configuration for the Axios request, including the authorization header.
const url =
  "https://api.curateit.com/api/collections/5228/bookmarks?perPage=400";
const config = {
  headers: { Authorization: `Bearer ${sessionKey}` },
};

const getInstaCdnLink = (profile) => {};

// Perform the GET request to fetch the data
axios
  .get(url, config)
  .then((response) => {
    // Extract the gem IDs from the response
    const gems = response?.data?.collection?.gems;
    const gemIds = gems.map((gem) => {
      // Split the URL by '/'
      const parts = gem.url.split("/");
      const id = gem.id;
      // Filter out empty strings and take the last part
      const userName = parts.filter((part) => part !== "").pop();
      return {
        id,
        url: gem.url,
      };
    });

    // Convert the array of gem IDs to a JSON string
    const jsonContent = JSON.stringify(gemIds, null, 2);

    // Save the JSON string to a file named gemIds.json
    fs.writeFile("gemUrls.json", jsonContent, "utf8", (err) => {
      if (err) {
        console.error("An error occurred while writing JSON to the file:", err);
      } else {
        console.log("JSON file has been saved with gem IDs.");
      }
    });
  })
  .catch((error) => {
    console.error("Error making the request:", error);
  });
