import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";

const config = defineConfig({
    projectId: "jw3szfyc",
    dataset: "production",
    title: "Befikre Backend",
    apiVersion: "2023-04-27",
    basePath: "/admin",

    plugins: [deskTool()],
});

export default config;
