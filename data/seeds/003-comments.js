exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      username: "philzcoffee",
      text: "We've got more than just delicious coffees to offer at our shops!",
      post_id: 1
    },
    {
      username: "biancasaurus",
      text: "Looks delicious!",
      post_id: 1
    },
    {
      username: "martinseludo",
      text: "Can't wait to try it!",
      post_id: 1
    },
    {
      username: "twitch",
      text: "Epic Street Fighter action here in Las Vegas at #EVO2017!",
      post_id: 2
    },
    {
      username: "michaelmarzetta",
      text: "Omg that match was crazy",
      post_id: 2
    },
    {
      username: "themexican_leprechaun",
      text: "What a setup",
      post_id: 2
    },
    {
      username: "dennis_futbol",
      text: "It that injustice",
      post_id: 2
    },
    {
      username: "dennis_futbol",
      text: "Is",
      post_id: 2
    },
    {
      username: "playhearthstone",
      text: "Love this shot!",
      post_id: 3
    },
    {
      username: "awaywetravel",
      text: "Yosemite is my most favorite place in the universe",
      post_id: 3
    },
    {
      username: "awesomebt28",
      text: "I like how Half Dome looks so old and useless",
      post_id: 3
    },
    {
      username: "shroud",
      text: "Yessss",
      post_id: 4
    },
    {
      username: "summit1g",
      text: "Looks great!",
      post_id: 4
    },
    {
      username: "t1alpha",
      text: "Can't wait to try it!",
      post_id: 4
    }
  ]);
};
