
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ result: "Fail", message: "Token not provided" });
    }

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ result: "Fail", message: "Invalid token" });
        }

        // Attach the user ID to the request for further use in other middleware or routes
        req.userId = decoded.userId;
        next();
    });
};

module.exports = verifyToken;
