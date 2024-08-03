type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType>(top: T, bottom: T): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const user = compare(
  { name: "John", color: "blue", position: 0, weight: 0 },
  { name: "Andwer", color: "red", position: 12, weight: 100 }
);

console.log(user);
