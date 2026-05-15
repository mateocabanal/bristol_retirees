const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const basePath =
  rawBasePath === "/" ? "" : rawBasePath.replace(/\/+$/, "");

export function withBasePath(path: string) {
  if (
    !basePath ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#") ||
    path === basePath ||
    path.startsWith(`${basePath}/`)
  ) {
    return path;
  }

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
