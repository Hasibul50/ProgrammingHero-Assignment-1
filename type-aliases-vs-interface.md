# Type Aliases vs Interfaces in TypeScript

In TypeScript, both `type` and `interface` are used to define the structure of data. They are quite similar, but they have some differences.

An interface is mainly used to describe the structure of an object. One important feature of an interface is that we can extend it or add new properties later. If we declare the same interface more than once, TypeScript automatically combines their properties. This is called "Declaration Merging".

For example:

```
interface Window {
  title: string;
}

interface Window {
  ts: string;
}
```

Here, both declarations are combined into one interface with two properties: `title` and `ts`.

We can also use the "extends" keyword to inherit properties from another interface.

```
interface Bear extends Animal {
  honey: boolean;
}
```

On the other hand, a type alias can be used for different types of data, such as objects, strings, numbers, unions, and tuples.

For example:

```
type Point = {
  x: number;
  y: number;
};
```

Unlike interfaces, we cannot declare the same type name again to add new properties. If we try to do so, TypeScript will show a compilation error.

To combine types, we use the "&" operator instead of the "extends" keyword.

```
type Bear = Animal & {
  honey: boolean;
};
```

In short, both `type` and `interface` are useful in TypeScript. We can use interfaces when working with objects and inheritance, while type aliases are useful for unions, primitive types, tuples, and other complex type combinations.

---
