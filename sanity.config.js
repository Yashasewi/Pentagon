import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/project-schema";

const config = defineConfig({
    projectId: "jw3szfyc",
    dataset: "production",
    title: "Befikre Backend",
    apiVersion: "2023-04-27",
    basePath: "/admin",

    plugins: [deskTool()],
    schema: { types: [project] },
});

export default config;
