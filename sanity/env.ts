const required = (name: string, value: string | undefined) => {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

export const projectId = required(
  "SANITY_PROJECT_ID",
  process.env.SANITY_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);

export const dataset = required("SANITY_DATASET", process.env.SANITY_DATASET);

export const apiVersion =
  process.env.SANITY_API_VERSION ?? new Date().toISOString().slice(0, 10);

export const studioBasePath = process.env.SANITY_STUDIO_BASE_PATH ?? "/studio";
