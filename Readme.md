1. multiplyValue() – Optional Parameters
This function is used to multiply a number by another number. It takes two parameters: the first number is required, but the second number is optional. If we don't provide the second number, the function automatically multiplies the first number by 2. Otherwise, it uses the multiplier we provide.

2. processInput() – Union Types and Type Narrowing
This function can accept three different types of values: string, number, and boolean. It checks the type of the given value and performs an operation based on that type. If the value is a string, it removes extra spaces and converts it into lowercase. If it is a number, it multiplies it by 10. If it is a boolean, it returns "Active" for true and "Inactive" for false.

3. formatCoordinate() – Tuple and Destructuring
This function takes three pieces of location information: latitude, longitude, and location name. It uses a tuple to make sure the values follow a fixed order and have the correct data types. Then, it uses destructuring to take each value separately and displays them together in a formatted location message.

4. concatenateArrays() – Generics and Rest Parameters
This function takes multiple arrays and combines them into one single array. It uses Generics, so the same function can work with different types of data, such as numbers or strings. The rest parameter allows us to pass multiple arrays as arguments, and the flat() method combines them into one array.

5. getPopularCourses() – Interface and filter()
This function is used to find popular courses from a list of courses. First, an interface defines what information every course should contain, such as its title, number of students, and publication status. Then, the filter() method checks each course. A course will be included only if it is published and has enough students according to the minimum student requirement.


6. pluckValues() – Generics, keyof and Indexed Access Types
This function is used to collect a particular property from multiple objects. For example, if we have a list of students, we can use it to collect only their names or ages. Generics make the function work with different types of objects. The keyof operator helps identify the available property names, and extends makes sure we only select a property that actually exists in the object. Finally, map() goes through each object and collects the selected values into a new array.


7. Employee and Manager – Class and Inheritance
This example shows how inheritance works in TypeScript. First, the Employee class is created with common information such as name and base salary. Then, the Manager class extends the Employee class, meaning it can use the properties and methods inherited from Employee. The Manager class also has its own department property and a separate method to display its role information. The super() keyword is used to call the parent class constructor and initialize the inherited properties. Protected properties can be accessed inside the parent and child classes, while private properties can only be accessed inside their own class.


8. validateAgeAsync() – Promise and Asynchronous Programming
This function checks whether a person is 18 years old or older. Instead of returning the result immediately, it uses a Promise to handle the operation. If the person's age is 18 or above, the Promise is resolved with an "Access Granted" message after one second using setTimeout(). Otherwise, the Promise is rejected with an error message. We can handle the successful result using then() and errors using catch(). We can also use async/await to handle the Promise in a cleaner way.
