exports.seed = function(knex, Promise) {
  return knex("posts").insert([
    {
      user_id: 1,

      imageUrl:
        "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
      likes: 400
    },
    {
      user_id: 2,
      imageUrl:
        "https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",
      likes: 4307
    },
    {
      user_id: 3,
      imageUrl:
        "https://tk-assets.lambdaschool.com/43bf01f9-319c-469d-8cf5-0120fe1007f1_yosemite.jpg",
      likes: 5306
    },
    {
      user_id: 4,

      imageUrl:
        "https://www.washingtonpost.com/resizer/JhUZA3EznUke-mPOIH93u37uwhU=/1454x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OBCD6FBOJRH5BKV7M3S6ELMZFU.jpg",
      likes: 50000
    }
  ]);
};
