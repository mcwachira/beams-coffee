export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-07-25";

console.log("TEST VAR:", process.env.NEXT_PUBLIC_TEST);
console.log(
  "All NEXT_PUBLIC vars:",
  Object.keys(process.env).filter((key) => key.startsWith("NEXT_PUBLIC_")),
);

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  "Missing environment variable: SANITY_STUDIO_DATASET",
);

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID, // Changed this
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID",
);

// export const useCdn = true;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
