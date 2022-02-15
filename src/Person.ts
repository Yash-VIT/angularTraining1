import { Course } from "./Course";
@Course({
    name: 'Angular 13'
})
export default class Person {
    constructor(private name: string, private age: number) {
    }
    getName(): String {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}