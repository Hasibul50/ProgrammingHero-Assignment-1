const multiplyValue = (value: number, multplier?: number): number => {
  if (multplier === undefined) {
    return value * 2;
  } else {
    return value * multplier;
  }
};
// Sample Input:
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));

const processInput = (
  value: number | string | boolean,
): string | number | boolean => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};
// Sample Input:
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

const formatCoordinate = (coordinates: [number, number, string]) => {
  const [latitude, longitude, locationName] = coordinates;
  return `"Location: ${locationName} (${latitude}, ${longitude})"`;
};
console.log(
  formatCoordinate([23.81, 90.41, "Dhaka"]),
  formatCoordinate([22.35, 91.78, "Chittagong"]),
);

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};
console.log(
  // Sample Input:
  concatenateArrays(["a", "b"], ["c", "d"]),
  concatenateArrays([1, 2], [3, 4], [5]),
);

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (course_obj: Course[], minStudents: number) => {
  return course_obj.filter(
    (course_obj) =>
      course_obj.isPublished === true && course_obj.students >= minStudents,
  );
};

// Sample Input:
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

getPopularCourses(courses, 80);

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

// Sample Input:
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// Sample Input:
pluckValues(users, "name");
pluckValues(users, "id");

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
// Sample Input:
const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails()
manager.getRoleInfo();

function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}
