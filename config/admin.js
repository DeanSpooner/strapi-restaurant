module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '342bed15641d07bf453373c96ab80eb8'),
  },
});
