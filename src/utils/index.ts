export function mapUniqItems(arr: any[], itemName: string): string[] {
  return arr
    .map((arrItem) => arrItem[itemName])
    .reduce<string[]>((acc, itemName: any) => {
      if (!~acc.indexOf(itemName)) {
        acc.push(itemName);
      }
      return acc;
    }, [])
    .sort((a, b) => (a > b ? 1 : -1));
}
