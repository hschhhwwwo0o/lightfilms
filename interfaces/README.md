# Interfaces

The interface defines the properties and methods that the object should implement. In other words, an interface is a definition of a custom data type, but without an implementation. In this case, the interfaces in TS are similar to those in Java and C#. Interfaces are defined using the interface keyword.

## Simple example: 

The interface declaration

```ts
interface IUser {
    id: number!
    name: string!
}
```

Interface use

```ts
let employee: IUser = {
    id: 1, 
    name: "Tom"
}
```

Interfaces have the ability to extend

```ts
interface IAdmin extends IUser {
    cool: true
}
```

# Useful documentation

- **https://www.typescriptlang.org/docs/handbook/interfaces.html**
- **https://habr.com/ru/company/otus/blog/456124/**