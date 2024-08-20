// ДЗ 17.2. Клас "Тренер".
// Створіть клас Coach, який буде представляти тренера. Додайте властивості, такі як ім'я, спеціалізація та рейтинг.
// Також реалізуйте метод для виведення інформації про тренера та його рейтинг.

class Coach {
    constructor(name, lastName, speciality, rating) {
        this.name = name;
        this.lastName = lastName;
        this.speciality = speciality;
        this.rating = rating;
    }

    getInfo(){
        console.log(`
        Coach: ${this.name} ${this.lastName}
        Specialization: ${this.speciality}
        Rating: ${this.rating}`)
    }

}

const coach_1 = new Coach('Kakashi', 'Hatake','ninjutsu', 4.8 );
const coach_2 = new Coach('Gai', 'Maito', 'taijutsu', 4.6);

coach_1.getInfo()
coach_2.getInfo()