import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId, studioBasePath } from "./sanity/env";
import schemaTypes from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "instantIT Studio",
  projectId,
  dataset,
  basePath: studioBasePath,
  apiVersion,
  schema: {
    types: schemaTypes,
  },
  plugins: [deskTool(), visionTool()],
  auth: {
    redirectOnSingle: true,
    providers: (prev) => prev.filter((provider) => provider.name === "sanity"),
  },
});
