exports.seed = function(knex, Promise) {
  return knex("comments").insert([
    {
      text: "We've got more than just delicious coffees to offer at our shops!",
      post_id: 1,
      user_id: 1
    },
    {
      text: "Looks delicious!",
      post_id: 1,
      user_id: 5
    },
    {
      text: "Can't wait to try it!",
      post_id: 1,
      user_id: 6
    },
    {
      text: "Epic Street Fighter action here in Las Vegas at #EVO2017!",
      post_id: 2,
      user_id: 7
    },
    {
      text: "Omg that match was crazy",
      post_id: 2,
      user_id: 8
    },
    {
      text: "What a setup",
      post_id: 2,
      user_id: 9
    },
    {
      text: "It that injustice",
      post_id: 2,
      user_id: 10
    },
    {
      text: "Is",
      post_id: 2,
      user_id: 10
    },
    {
      text: "Love this shot!",
      post_id: 3,
      user_id: 3
    },
    {
      text: "Yosemite is my most favorite place in the universe",
      post_id: 3,
      user_id: 11
    },
    {
      text: "I like how Half Dome looks so old and useless",
      post_id: 3,
      user_id: 12
    },
    {
      text: "Yessss",
      post_id: 4,
      user_id: 13
    },
    {
      text: "Looks great!",
      post_id: 4,
      user_id: 14
    },
    {
      text: "Can't wait to try it!",
      post_id: 4,
      user_id: 15
    },
    {
      text: "This tournament was amaaazing",
      post_id: 5,
      user_id: 14
    },
    {
      text: "s1mple is officially the #GOAT",
      post_id: 5,
      user_id: 10
    }
  ]);
};
