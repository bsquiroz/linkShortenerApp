import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./database/config.js";

(async () => {
    try {
        await connectDB();
    } catch (error) {
        console.log(error);
    }
})();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`run server http://localhost:${PORT}/api/v1`);
});
