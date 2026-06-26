// ── 1. DATA — All concepts stored as an array of objects ──
const concepts = [
  {
    id: 1, icon: "🔢", title: "Variables & Data Types", tag: "basics",
    desc: "Python uses dynamic typing — you don't need to declare types. Variables hold references to objects.",
    code: `# Basic data types
name = "Rahul"          # str
age = 22                # int
gpa = 8.75              # float
is_student = True       # bool

# Type checking
print(type(name))       # <class 'str'>

# Type casting
age_str = str(age)      # "22"

# f-string formatting
print(f"Name: {name}, Age: {age}")

# Multiple assignment
a, b, c = 10, 20, 30`,
    points: [
      "Integers have unlimited precision in Python",
      "Strings are immutable sequences",
      "bool is a subclass of int (True=1, False=0)",
      "f-strings are the fastest way to format strings"
    ]
  },
  {
    id: 2, icon: "🔄", title: "Control Flow", tag: "basics",
    desc: "Python uses indentation to define blocks. Loops and conditionals control program flow.",
    code: `marks = 85
if marks >= 90:
    grade = "A+"
elif marks >= 75:
    grade = "A"
else:
    grade = "B"
print(f"Grade: {grade}")

# for loop
for i in range(1, 6):
    print(i, end=" ")   # 1 2 3 4 5

# while loop
count = 0
while count < 3:
    print("Hello")
    count += 1

# break and continue
for n in range(10):
    if n == 5: break
    if n % 2 == 0: continue
    print(n, end=" ")   # 1 3`,
    points: [
      "Python uses indentation (4 spaces) — not braces",
      "range(start, stop, step) is very common",
      "break exits the loop, continue skips the iteration",
      "for...else runs if loop completes without break"
    ]
  },
  {
    id: 3, icon: "📋", title: "Lists & Tuples", tag: "ds",
    desc: "Lists are mutable ordered sequences. Tuples are immutable — ideal for fixed data.",
    code: `fruits = ["apple", "mango", "banana"]
fruits.append("grape")
fruits.remove("mango")
print(fruits)

# Slicing
nums = [0, 1, 2, 3, 4, 5]
print(nums[1:4])         # [1, 2, 3]
print(nums[::-1])        # reversed

# List comprehension
squares = [x**2 for x in range(6)]

# Sorting
data = [3, 1, 4, 1, 5]
data.sort()
print(data)

# Tuple
point = (3, 4)
x, y = point            # unpacking
print(x, y)`,
    points: [
      "List is mutable, tuple is immutable",
      "Negative indexing: -1 is last element",
      "List comprehension is faster than a regular loop",
      "Tuples are hashable — can be used as dict keys"
    ]
  },
  {
    id: 4, icon: "📖", title: "Dictionaries & Sets", tag: "ds",
    desc: "Dictionaries store key-value pairs. Sets store unique unordered elements.",
    code: `student = {"name": "Priya", "age": 21}
print(student["name"])
student["city"] = "Mumbai"
student.pop("age")

# Dict methods
print(student.keys())
print(student.values())
print(student.get("phone", "N/A"))

# Dict comprehension
squares = {x: x**2 for x in range(5)}

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)   # union
print(a & b)   # intersection
print(a - b)   # difference

# Remove duplicates
lst = [1, 2, 2, 3, 3]
unique = list(set(lst))`,
    points: [
      "Dict preserves insertion order (Python 3.7+)",
      "Dict lookup is O(1) average time",
      "Sets use hashing — no duplicates, no order",
      "set() is great for removing duplicates from a list"
    ]
  },
  {
    id: 5, icon: "⚙️", title: "Functions", tag: "basics",
    desc: "Functions are reusable blocks. Python supports default args, *args, **kwargs, and lambdas.",
    code: `def greet(name, msg="Hello"):
    return f"{msg}, {name}!"

print(greet("Amit"))
print(greet("Sneha", "Hi"))

# *args
def total(*nums):
    return sum(nums)
print(total(1, 2, 3, 4))

# **kwargs
def profile(**info):
    for k, v in info.items():
        print(f"{k}: {v}")
profile(name="Riya", age=22)

# Lambda
square = lambda x: x ** 2
print(square(5))

# map and filter
nums = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x*2, nums))
evens   = list(filter(lambda x: x%2==0, nums))`,
    points: [
      "Default arguments must come after non-default ones",
      "*args captures extra positional args as a tuple",
      "**kwargs captures extra keyword args as a dict",
      "Lambda is a one-liner anonymous function"
    ]
  },
  {
    id: 6, icon: "🏗️", title: "OOP — Classes", tag: "oop",
    desc: "Classes are blueprints; objects are instances. __init__ is the constructor.",
    code: `class Student:
    college = "MIT"           # class variable

    def __init__(self, name, age, marks):
        self.name  = name     # instance variable
        self.age   = age
        self.marks = marks

    def grade(self):
        if self.marks >= 75: return "A"
        elif self.marks >= 60: return "B"
        return "C"

    def __str__(self):
        return f"Student({self.name}, {self.age})"

s1 = Student("Anjali", 21, 82)
print(s1)
print(s1.grade())
print(Student.college)`,
    points: [
      "self refers to the current object instance",
      "Class variables are shared across all objects",
      "__str__ controls print() output",
      "__init__ is called automatically when object is created"
    ]
  },
  {
    id: 7, icon: "🧬", title: "Inheritance", tag: "oop",
    desc: "Inheritance lets a child class reuse parent class code. Python supports multiple inheritance.",
    code: `class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):           # override
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

d = Dog("Bruno")
print(d.speak())               # Woof!
print(d.name)                  # inherited

# super()
class Puppy(Dog):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

# Polymorphism
animals = [Dog("Rex"), Cat("Kitty")]
for a in animals:
    print(f"{a.name}: {a.speak()}")`,
    points: [
      "super() calls the parent class method",
      "Method overriding replaces parent behavior",
      "Polymorphism — same method name, different behavior",
      "isinstance(obj, Class) checks object type"
    ]
  },
  {
    id: 8, icon: "🚨", title: "Exception Handling", tag: "basics",
    desc: "Exceptions handle runtime errors gracefully without crashing the program.",
    code: `try:
    num = int(input("Enter number: "))
    result = 10 / num
    print(f"Result: {result}")
except ValueError:
    print("Enter a valid integer")
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"Error: {e}")
else:
    print("No errors!")
finally:
    print("Always runs")

# Custom exception
class InsufficientFundsError(Exception):
    def __init__(self, amount):
        super().__init__(f"Need ₹{amount} more")

try:
    raise InsufficientFundsError(500)
except InsufficientFundsError as e:
    print(e)`,
    points: [
      "except catches specific exception types",
      "else runs only if no exception occurred",
      "finally always runs — good for cleanup",
      "Always catch specific exceptions before generic Exception"
    ]
  }
];

// ── 2. STATE ──
let activeFilter = "all";
let selected = null;

// ── 3. FILTER FUNCTION ──
function setFilter(tag, btn) {
  activeFilter = tag;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderGrid();
}

// ── 4. RENDER CARDS ──
function renderGrid() {
  const query = document.getElementById("search").value.toLowerCase();
  const grid = document.getElementById("grid");

  const filtered = concepts.filter(c => {
    const matchTag = activeFilter === "all" || c.tag === activeFilter;
    const matchSearch = c.title.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query);
    return matchTag && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty">No concepts found. Try a different search.</div>';
    return;
  }

  grid.innerHTML = filtered.map(c => `
    <div class="card ${selected === c.id ? 'selected' : ''}" onclick="showDetail(${c.id})">
      <div class="card-icon">${c.icon}</div>
      <div class="card-title">${c.title}</div>
      <div class="card-tag">${c.tag}</div>
    </div>
  `).join("");
}

// ── 5. SHOW DETAIL PANEL ──
function showDetail(id) {
  selected = id;
  renderGrid();

  const c = concepts.find(x => x.id === id);
  const det = document.getElementById("detail");
  det.style.display = "block";

  det.innerHTML = `
    <div class="detail-header">
      <div class="detail-icon">${c.icon}</div>
      <div>
        <div class="detail-title">${c.title}</div>
        <div class="detail-tag">${c.tag}</div>
      </div>
    </div>
    <div class="detail-body">
      <div class="desc">${c.desc}</div>
      <div class="code-block">${c.code.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
      <div class="key-points">
        <div class="key-points-title">Key interview points</div>
        ${c.points.map(p => `<div class="point">${p}</div>`).join("")}
      </div>
    </div>
  `;

  det.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ── 6. SEARCH EVENT ──
document.getElementById("search").addEventListener("input", renderGrid);

// ── 7. INITIAL RENDER ──
renderGrid();