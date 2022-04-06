export function ellipseAddress(address: string, before = 6, after = 4) {
  if (address.length <= 10) return address;
  return `${address.slice(0, before)}...${address.substr(
    address.length - after,
    after
  )}`;
}
