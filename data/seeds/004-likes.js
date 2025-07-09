exports.seed = function (knex) {
  return knex("likes").insert([
    {
      post_id: 1,
      user_id: 1,
    },
    {
      post_id: 1,
      user_id: 5,
    },
    {
      post_id: 1,
      user_id: 6,
    },
    {
      post_id: 2,
      user_id: 7,
    },
    {
      post_id: 2,
      user_id: 8,
    },
    {
      post_id: 2,
      user_id: 9,
    },
    {
      post_id: 2,
      user_id: 10,
    },
    {
      post_id: 2,
      user_id: 10,
    },
    {
      post_id: 3,
      user_id: 3,
    },
    {
      post_id: 3,
      user_id: 11,
    },
    {
      post_id: 3,
      user_id: 12,
    },
    {
      post_id: 4,
      user_id: 13,
    },
    {
      post_id: 4,
      user_id: 14,
    },
    {
      post_id: 4,
      user_id: 15,
    },
    {
      post_id: 5,
      user_id: 14,
    },
    {
      post_id: 5,
      user_id: 10,
    },
  ]);
};
