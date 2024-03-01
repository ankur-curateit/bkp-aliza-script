const axios = require("axios");
const sessionKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk5LCJpYXQiOjE3MDkyOTQwNzcsImV4cCI6MTcxMTg4NjA3N30.NatU5N10vYjx7Y6dVa9vrExwbB1FlT50haxhhgzDZxE";

const putPayloads = [
  {
    id: 111831,
    payload: {
      data: {
        title:
          "Negin Mirsalehi (@negin_mirsalehi) • Instagram photos and videos",
        description: "Founder @gisou 🍯\n6 Generations of bee-keepers",
        media_type: "Profile",
        author: 199,
        url: "https://www.instagram.com/negin_mirsalehi/",
        metaData: {
          url: "https://www.instagram.com/negin_mirsalehi/",
          icon: "",
          type: "Profile",
          title:
            "Negin Mirsalehi (@negin_mirsalehi) • Instagram photos and videos",
          covers: [
            "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407766.png",
          ],
          defaultIcon: "",
        },
        collection_gems: 5228,
        remarks: "",
        tags: [],
        is_favourite: false,
        custom_fields_obj: [],
        media: {
          covers: [
            "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709327407766.png",
          ],
        },
        platform: "Instagram",
        expander: [],
      },
    },
  },
  {
    id: 111877,
    payload: {
      data: {
        title: "Use Less",
        description:
          "@useless_dk - helping you increase your style confidence and do more with less.\n\nI'm Signe, a former fashion designer turned certified stylecoach & colour consultant from Denmark. USE LESS is a personal styling service working within the field of slow fashion. Since 2015 I’ve helped my audience put on the right clothes, say goodbye to fast fashion and hello to lasting style that makes you glow from the inside and out. I embody a slow lifestyle where not being afraid of missing out but committing to the important things in life, is at the core of everything I do. On my YouTube channel I share style tips & tricks that are easy to implement and follow. \n\nFor collaboration inquiries: collabs@uselesswardrobe.dk\n",
        media_type: "Profile",
        author: 199,
        url: "https://www.youtube.com/channel/UCafauFSnOFOfZG0ZMLQvpcw",
        metaData: {
          url: "https://www.youtube.com/channel/UCafauFSnOFOfZG0ZMLQvpcw",
          icon: "",
          type: "Profile",
          title: "Use Less",
          covers: [
            "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709328064941.png",
          ],
          defaultIcon: "",
        },
        collection_gems: 5228,
        remarks: "",
        tags: [],
        is_favourite: true,
        custom_fields_obj: [],
        media: {
          covers: [
            "https://curateit-prod.s3.amazonaws.com/common/base64-converted-imgs/1709328064941.png",
          ],
        },
        platform: "YouTube",
        expander: [],
      },
    },
  },
];

async function updateGems() {
  for (const item of putPayloads) {
    const url = `https://api.curateit.com/api/gems/${item.id}`;
    const payload = item.payload;
    const config = {
      headers: {
        Authorization: `Bearer ${sessionKey}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.put(url, payload, config);
      console.log(`Success updating gem with id ${item.id}:`);
    } catch (error) {
      console.error(`Error updating gem with id ${item.id}:`);
    }
  }
}

updateGems();
