import path from "path";
import { defineConfig } from "vite";

// plugins
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
    plugins: [
        Vue(),
        Pages({
            extensions: ["vue"],
        }),
        Layouts({
            layoutsDirs: "src/layouts",
            defaultLayout: "application",
        }),
        AutoImport({
            imports: [
                "vue",
                {
                    "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
                },
            ],
        }),
        Components({
            resolvers: [NaiveUiResolver()],
        }),
    ],
    resolve: {
        alias: {
            "~/": `${path.resolve(__dirname, "src")}/`,
        },
    },
});
