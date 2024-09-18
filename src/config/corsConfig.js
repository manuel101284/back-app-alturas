const corsOptions = {
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Access-Control-Allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  ],
};

module.exports = { corsOptions };
