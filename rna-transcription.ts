export function toRna(dna: string): string {
  let new_val: string = "";

  const obj = {"C": "G", "G": "C", "A": "U", "T": "A"};
  const map_dna: Map<string, string> = new Map<string, string>(Object.entries(obj));
  for(let r_val of dna) {
    if (map_dna.has(r_val)) {
      new_val += map_dna.get(r_val);
    } else {
      throw new Error("Invalid input DNA.");
    }
  }
  return new_val;
}
