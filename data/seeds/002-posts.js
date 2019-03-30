exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      username: "philzcoffee",
      thumbnailUrl:
        "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

      imageUrl:
        "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
      likes: 400
    },
    {
      username: "fortnite",
      thumbnailUrl:
        "https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg",
      imageUrl:
        "https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",
      likes: 4307
    },
    {
      username: "playhearthstone",
      thumbnailUrl:
        "https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg",
      imageUrl:
        "https://tk-assets.lambdaschool.com/43bf01f9-319c-469d-8cf5-0120fe1007f1_yosemite.jpg",
      likes: 5306
    },
    {
      username: "ApexLegends",
      thumbnailUrl:
        "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2019/02/20/105750111-1550681962198screenshot2019-02-20at11.57.41am.530x298.png?v=1550681993",

      imageUrl:
        "https://www.washingtonpost.com/resizer/JhUZA3EznUke-mPOIH93u37uwhU=/1454x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OBCD6FBOJRH5BKV7M3S6ELMZFU.jpg",
      likes: 50000
    }
  ]);
};
