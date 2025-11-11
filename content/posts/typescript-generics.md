---
title: "The Complete Guide to TypeScript Generics"
date: "2023-01-05"
readTime: "15 min read"
tags: ["TypeScript"]
excerpt: "TypeScript generics are a powerful feature that can help you write more reusable and type-safe code. In this comprehensive guide, I'll explain everything from basics to advanced patterns."
---

# The Complete Guide to TypeScript Generics

TypeScript generics are a powerful feature that can help you write more reusable and type-safe code. In this comprehensive guide, I'll explain everything from basic generic functions to advanced patterns like conditional types, mapped types, and practical real-world examples.

## What Are Generics?

Generics allow you to write flexible, reusable code that works with multiple types while maintaining type safety.

## Basic Generic Function

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello"); // Type: string
const number = identity<number>(42); // Type: number
```

## Generic Interfaces

```typescript
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 42 };
```

## Generic Classes

```typescript
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const userStore = new DataStore<User>();
userStore.add({ name: "John", age: 30 });
```

## Generic Constraints

Limit what types can be used with generics:

```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}

logLength("hello"); // ✓ Works
logLength([1, 2, 3]); // ✓ Works
logLength(42); // ✗ Error: number doesn't have length
```

## Conditional Types

```typescript
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"
```

## Mapped Types

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }
```

## Real-World Example: API Response Handler

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  return response.json();
}

// Usage
const users = await fetchData<User[]>("/api/users");
const profile = await fetchData<UserProfile>("/api/profile");
```

## Best Practices

1. Use meaningful generic parameter names (not just T)
2. Add constraints when possible
3. Don't overuse generics - keep it simple
4. Document complex generic types

## Conclusion

Generics are essential for building reusable, type-safe TypeScript applications. Master them to write better code!
