exports.seed = function(knex, Promise) {
  return knex("profiles").insert([
    {
      username: "philzcoffee",
      password: "password",
      thumbnailUrl:
        "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg"
    },
    {
      username: "fortnite",
      password: "password",
      thumbnailUrl:
        "https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg"
    },
    {
      username: "playhearthstone",
      password: "password",
      thumbnailUrl:
        "https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg"
    },
    {
      username: "ApexLegends",
      password: "password",
      thumbnailUrl:
        "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2019/02/20/105750111-1550681962198screenshot2019-02-20at11.57.41am.530x298.png?v=1550681993"
    },
    {
      username: "biancasaurus",
      password: "password"
    },
    {
      username: "martinseludo",
      password: "password"
    },
    {
      username: "twitch",
      password: "password"
    },
    {
      username: "michaelmarzetta",
      password: "password"
    },
    {
      username: "themexican_leprechaun",
      password: "password"
    },
    {
      username: "dennis_futbol",
      password: "password"
    },
    {
      username: "awaywetravel",
      password: "password"
    },
    {
      username: "awesomebt28",
      password: "password"
    },
    {
      username: "shroud",
      password: "password",
      thumbnailUrl:
        "https://pbs.twimg.com/profile_images/986674209106550784/mbmmyb6Z_400x400.jpg"
    },
    {
      username: "summit1g",
      password: "password",
      thumbnailUrl:
        "https://pbs.twimg.com/profile_images/825045721573314561/efRvTGlf_400x400.jpg"
    },
    {
      username: "t1alpha",
      password: "password",
      thumbnailUrl:
        "https://pbs.twimg.com/profile_images/693320968811380736/g3cD_R1A_400x400.png"
    }
  ]);
};
