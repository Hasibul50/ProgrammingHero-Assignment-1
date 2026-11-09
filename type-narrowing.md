# Understanding Type Narrowing in TypeScript

Type narrowing is a way of checking the type of a variable and making it more specific. Sometimes a variable can have more than one possible type. By using conditions, TypeScript can understand which type we are working with.

There are three common ways to perform type narrowing: "typeof", "in", and "instanceof".

**1. Using typeof**

The "typeof" operator is used to check the basic type of a variable, such as string, number, or boolean. When we use it inside an "if" condition, TypeScript can automatically identify the variable's type.

For example:

```
function printAll(strs: string | string[] | null): void {
  if (typeof strs === "object" && strs !== null) {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
```

Here, the variable `strs` can be a string, an array of strings, or null. We use "typeof" to check its type. If it is an array, the loop prints each item. If it is a string, it prints the string directly.

**2. Using the in operator**

The "in" operator checks whether a particular property exists inside an object. It is useful when we have different object types and want to identify which one we are working with.

For example:

```
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird): void {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

Here, the `animal` variable can be either a Fish or a Bird. If it has the "swim" property, TypeScript understands that it is a Fish. Otherwise, it treats it as a Bird and calls the "fly()" method.

**3. Using instanceof**

The "instanceof" operator checks whether an object belongs to a particular class or constructor. It helps TypeScript identify the type of an object.

For example:

```
function logValue(x: Date | string): void {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
```

Here, the variable `x` can be either a Date object or a string. If it is a Date object, the "toUTCString()" method is used. Otherwise, TypeScript understands that it is a string and uses the "toUpperCase()" method.

In short, type narrowing helps us work with different types of values more safely. By using "typeof", "in", and "instanceof", we can check a variable's type and perform the correct operation without unnecessary type conversions.

Add a comparison tableInclude practical usage examples
