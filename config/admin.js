module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '193c168850287946a4d036df4dfa8817'),
  },
});
