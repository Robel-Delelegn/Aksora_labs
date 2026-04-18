// Bump this whenever files in public/images are replaced in-place.
const IMAGE_VERSION = "20260418-3";

export function imageAsset(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${path}${path.includes("?") ? "&" : "?"}v=${IMAGE_VERSION}`;
}
