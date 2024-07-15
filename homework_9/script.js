/*ДЗ 9.1. Сумма зарплат
Дізнатись суму всіх зарплат користувачів:
let company = {
sales:[{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
development: {
web: [{ name: 'Peter', salary: 2000}, { name: 'Alex', salary: 1800}],
internals: [{ name: 'Jack', salary: 1300}]
}
}
Об'єкт може містити невідому кількість департаментів та співробітників
*/


const company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    },
    designer: [{name: 'Anna', salary: 2300 }]
};

function showSumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((sum, employee) => sum + employee.salary, 0);
    } else {
        let sum = 0;
        for (let subDepartment of Object.values(department)) {
            sum += showSumSalaries(subDepartment);
        }
        return sum;
    }
}

const totalSalaries = showSumSalaries(company);
console.log(totalSalaries);
