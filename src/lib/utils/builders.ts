export function buildQueryString(struct: Record<string, any>): string {
  let urlSearchParams = new URLSearchParams();
  
  // Filter out undefined properties, add to search params if defined
  struct.getOwnPropertyNames().forEach((propName: any) => {
    if (struct[propName] !== undefined) {
      urlSearchParams.append(propName, struct[propName]);
    }
  });
  
  return urlSearchParams.toString();
}