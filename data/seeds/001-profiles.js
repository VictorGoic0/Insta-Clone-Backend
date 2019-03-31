exports.seed = function(knex, Promise) {
  return knex("profiles").insert([
    {
      username: "philzcoffee",
      password: "password"
    },
    {
      username: "fortnite",
      password: "password"
    },
    {
      username: "playhearthstone",
      password: "password"
    },
    {
      username: "ApexLegends",
      password: "password"
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
      password: "password"
    },
    {
      username: "summit1g",
      password: "password"
    },
    {
      username: "t1alpha",
      password: "password"
    }
  ]);
};
