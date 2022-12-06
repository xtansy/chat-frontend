import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@store": path.resolve(__dirname, "./src/redux/"),
            "@utils/constants": path.resolve(
                __dirname,
                "./src/utils/constants"
            ),
        },
    },
});
