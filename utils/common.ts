export function ellipseAddress(address: string) {
  if (address.length <= 10) return address;
  return `${address.slice(0, 6)}...${address.substr(address.length - 4, 4)}`;
}
