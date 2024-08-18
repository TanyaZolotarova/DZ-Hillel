function Student(name, lastName, birthYear, assessments = [], maxAttendance = 25) {

    this.name = name;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.assessments = assessments;
    this.attendance = new Array(Math.min(maxAttendance, 25)).fill(null);

    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.getAverageRating = function () {
        if (this.assessments.length === 0) return 0;
        const sum = this.assessments.reduce((totalRating, rating) => totalRating + rating, 0);
        return sum / this.assessments.length;
    };

    this.present = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    };

    this.absent = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    };

    this.summary = function () {
        const averageRating = this.getAverageRating();
        const attendedClasses = this.attendance.filter(item => item === true).length;
        const totalClasses = this.attendance.filter(item => item !== null).length;
        let attendanceRate;

        if (totalClasses > 0) {
            attendanceRate = attendedClasses / totalClasses;
        } else {
            attendanceRate = 0;
        }

        if (averageRating > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageRating > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

const student_1 = new Student('Harry', 'Potter', 1980, [95, 86, 90, 98]);
const student_2 = new Student('Hermione ', 'Granger', 1979, [100, 100, 98, 100]);
const student_3 = new Student('Ronald', 'Weasley', 1980, [60, 54, 58, 76]);
const student_4 = new Student('Draco', 'Malfoy', 1980, [98, 94, 98, 100]);

student_1.present();
student_1.absent();
student_1.present();
student_1.absent();

student_2.present();
student_2.present();
student_2.present();
student_2.present();


student_3.present();
student_3.absent();
student_3.present();
student_3.absent();

student_4.absent();
student_4.present();
student_4.present();
student_4.present();


console.log('-------------- Student 1 --------------  ', `
${student_1.name} ${student_1.lastName}, 
Age: ${student_1.getAge()}, 
Average rating: ${student_1.getAverageRating()}, 
Attendance: ${student_1.attendance},
Summary: ${student_1.summary()}`);

console.log('---------------- Student 2 -------------- ', `
${student_2.name} ${student_2.lastName},
Age: ${student_2.getAge()}, 
Average rating: ${student_2.getAverageRating()},
Attendance: ${student_2.attendance},
 Summary: ${student_2.summary()}`);

console.log('----------------- Student 3 --------------  ', `
${student_3.name} ${student_3.lastName}, 
Age: ${student_3.getAge()}, 
Average rating: ${student_3.getAverageRating()},
Attendance: ${student_3.attendance},
Summary: ${student_3.summary()}`);

console.log('---------------- Student 4 --------------  ', `
${student_4.name} ${student_4.lastName},
Age: ${student_4.getAge()}, 
Average rating: ${student_4.getAverageRating()},
Attendance: ${student_4.attendance},
Summary: ${student_4.summary()}`);

