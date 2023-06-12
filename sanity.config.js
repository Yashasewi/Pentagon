import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/project-schema";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: "Befikre Backend",
  apiVersion: "2023-04-27",
  basePath: "/admin",

  plugins: [deskTool()],
  schema: { types: [project] },
});

export default config;
