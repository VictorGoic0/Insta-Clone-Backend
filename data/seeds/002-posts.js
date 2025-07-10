exports.seed = function (knex) {
  return knex("posts").insert([
    {
      user_id: 1,
      description: "Opened and ready for business!",
      imageUrl:
        "https://media.istockphoto.com/id/1400194993/photo/cappuccino-art.jpg?s=612x612&w=0&k=20&c=_nYOcyQ15cYEeUYgUzkC5qG946nkCwU06NiWKt1s8SE=",
    },
    {
      user_id: 2,
      description: "Come and join the action while you can!",
      imageUrl:
        "https://admin.esports.gg/wp-content/uploads/2023/07/street-fighter-six-evo-record.jpg",
    },
    {
      user_id: 3,
      description: "The view here is pretty good.",
      imageUrl:
        "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/aramark-parent/yosemite-national-park/site-images/yosemite-national-park-lodging-and-activities-california-united-states-showcasing-a-picturesque-natural-landscape.jpeg?cropY=411&cropW=3006&cropH=1097&width=800&height=292",
    },
    {
      user_id: 4,
      description:
        "20 million players within 2 weeks of launch! Thank you so much everyone!",
      imageUrl:
        "https://www.washingtonpost.com/resizer/JhUZA3EznUke-mPOIH93u37uwhU=/1454x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OBCD6FBOJRH5BKV7M3S6ELMZFU.jpg",
    },
    {
      user_id: 13,
      description: "Congrats to the broys and the #GOAT",
      imageUrl:
        "https://pley.gg/wp-content/uploads/2024/12/teamsnatus-vincere-NAVI_win_e9z46m.jpg",
    },
  ]);
};
