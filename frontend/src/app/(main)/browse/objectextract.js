var xt = {
    "employees": [
        {
            "employee-id": "12345",
            "first-name": "John",
            "last-name": "Doe",
            "job-title": "Software Engineer",
            "hire-date": "2022-01-15"
        },
        {
            "employee-id": "12347",
            "first-name": "John",
            "last-name": "Doe",
            "job-title": "Software Engineer",
            "hire-date": "2022-01-15"
        },
        {
            "employee-id": "12349",
            "first-name": "John",
            "last-name": "Doe",
            "job-title": "Software Engineer",
            "hire-date": "2022-01-15"
        },
        {
            "employee-id": "12340",
            "first-name": "John",
            "last-name": "Doe",
            "job-title": "Software Engineer",
            "hire-date": "2022-01-15"
        }
    ]
};

// Method 1: Using map() to create an array of employee IDs
var employeeIds = xt.employees.map(employee => employee["employee-id"]);

console.log("Employee IDs (Array):", employeeIds);


// Method 2: Creating a key-value pair object (if needed)
var employeeIdMap = {};
xt.employees.forEach(employee => {
    employeeIdMap[employee["employee-id"]] = employee["first-name"] + " " + employee["last-name"]; // Or any other value you want to associate
});

console.log("Employee ID Map (Object):", employeeIdMap);


//Method 3: Array of Objects with Employee ID and Name

const employeeIdNameArray = xt.employees.map(employee => ({
    id: employee["employee-id"],
    name: `${employee["first-name"]} ${employee["last-name"]}` // Template literals for cleaner string concatenation
}));

console.log("Employee ID and Name Array:", employeeIdNameArray);



// If you want to store the result in a variable named 'abc':
var abc = employeeIds; // For method 1
// or
var abc = employeeIdMap; // For method 2
// or
var abc = employeeIdNameArray; // For method 3

console.log("abc:", abc);