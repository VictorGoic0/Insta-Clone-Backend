exports.seed = function (knex) {
  return knex("posts").insert([
    {
      user_id: 1,
      description: "Opened and ready for business!",
      imageUrl:
        "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    },
    {
      user_id: 2,
      description: "Come and join the action while you can!",
      imageUrl:
        "https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",
    },
    {
      user_id: 3,
      description: "The view here is pretty good.",
      imageUrl:
        "https://tk-assets.lambdaschool.com/43bf01f9-319c-469d-8cf5-0120fe1007f1_yosemite.jpg",
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
        "https://cdn.vs.com.br/webedia-temp/1543339173760-naviliftesl_2517793b.jpg",
    },
  ]);
};
