import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@store": path.resolve(__dirname, "./src/redux/"),
            "@redux/userSlice": path.resolve(__dirname, "./src/redux/userSlice"),
            "@redux/dialogSlice": path.resolve(__dirname, "./src/redux/dialogSlice"),
            "@redux/userSlice/selectors": path.resolve(__dirname, "./src/redux/userSlice/selectors"),
            "@redux/dialogSlice/selectors": path.resolve(__dirname, "./src/redux/dialogSlice/selectors"),
            "@utils/constants": path.resolve(
                __dirname,
                "./src/utils/constants"
            ),
            "@common": path.resolve(__dirname, "./src/common"),
            "@pages": path.resolve(__dirname, "./src/Pages"),
            "@utils/api/hooks": path.resolve(
                __dirname,
                "./src/utils/api/hooks"
            ),
            "@utils/api/requests/auth": path.resolve(
                __dirname,
                "./src/utils/api/requests/auth"
            ),
            "@utils/api/requests/user": path.resolve(
                __dirname,
                "./src/utils/api/requests/user"
            ),
            "@utils/api/requests/dialog": path.resolve(
                __dirname,
                "./src/utils/api/requests/dialog"
            ),
            "@utils/socket/emits": path.resolve(
                __dirname,
                "./src/utils/socket/emits"
            ),
        },
    },
});
