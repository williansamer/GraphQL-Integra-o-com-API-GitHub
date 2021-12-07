module.exports = async ({ req }) => {
  const user_id = await req.headers.authorization;

  return { user_id };
};
