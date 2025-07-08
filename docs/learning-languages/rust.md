# Rust

## Memory Safety

Rust achieves memory safety through a combination of **ownership**, **borrowing**, and **lifetimes** - all enforced at compile time without runtime overhead. This gives you both safety AND performance, eliminating the traditional trade-off between garbage collected languages and manual memory management.

### The Ownership System

Every value in Rust has a single **owner**. When the owner goes out of scope, the value is automatically cleaned up. This prevents:
- **Memory leaks** - values are always cleaned up
- **Double-free errors** - values can only be freed once
- **Use-after-free bugs** - you can't access moved values

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 is "moved" to s2

    // println!("{}", s1); // This would cause a compile error!
    println!("{}", s2); // This works fine
}
```

### Borrowing and References

Instead of transferring ownership, you can **borrow** values:

```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1); // Borrow s1
    println!("Length of '{}' is {}", s1, len); // s1 is still valid!
}

fn calculate_length(s: &String) -> usize {
    s.len()
} // s goes out of scope but doesn't drop the String (it's borrowed)
```

### The Borrowing Rules

Rust enforces these rules at compile time:
1. You can have either **one mutable reference** OR **any number of immutable references**
2. References must always be valid (no dangling pointers)

```rust
fn main() {
    let mut s = String::from("hello");

    let r1 = &s; // immutable borrow
    let r2 = &s; // another immutable borrow - OK!

    // let r3 = &mut s; // This would fail - can't have mutable and immutable borrows

    println!("{} and {}", r1, r2);
    // r1 and r2 are no longer used after this point

    let r3 = &mut s; // Now this is OK
    println!("{}", r3);
}
```

### Lifetimes

Lifetimes ensure that references are valid for as long as needed:

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

The lifetime annotation `'a` tells Rust that the returned reference will live as long as the shorter of the two input references.

### Smart Pointers

Rust provides smart pointers for more complex memory management:

- **`Box<T>`** - Heap allocation with single ownership
- **`Rc<T>`** - Reference counting for shared ownership
- **`Arc<T>`** - Atomic reference counting for thread-safe sharing
- **`RefCell<T>`** - Interior mutability with runtime borrow checking

```rust
use std::rc::Rc;

fn main() {
    let data = Rc::new(String::from("shared data"));
    let data1 = Rc::clone(&data);
    let data2 = Rc::clone(&data);

    println!("Reference count: {}", Rc::strong_count(&data)); // Prints 3
}
```

### Key Benefits

- **Zero-cost abstractions** - No runtime overhead for safety
- **Prevents data races** - Compile-time guarantee of thread safety
- **No garbage collector** - Deterministic memory management
- **Memory safety without `unsafe`** - Most code can be written safely

### Advanced Topics

- **Interior mutability patterns** - `RefCell`, `Cell`, `Mutex`
- **The `unsafe` keyword** - When and how to use it responsibly
- **RAII (Resource Acquisition Is Initialization)** - Automatic resource cleanup
- **Concurrent programming** - `Arc`, `Mutex`, channels

## references

- [rust from base to game2D](https://pragprog.com/titles/hwrust/hands-on-rust/)
- [The Rust Programming Language (The Book)](https://doc.rust-lang.org/book/)
- [Rustonomicon - The Dark Arts of Advanced Rust](https://doc.rust-lang.org/nomicon/)
