const cors = require("cors");

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://your-domain.com"
      : "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

module.exports = cors(corsOptions);
