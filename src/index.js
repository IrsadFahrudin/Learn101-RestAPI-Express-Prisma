/**
 * Employee name
 * @type{string}
*/

const employeeName = "Kazuma"

/**
 * Array of grades
 * @type{Array<number>
*/

const grades = [23, 3, 3.4, 44]

/**
 * Todo Object
 * @type{{id: number|string, text: string}}
*/

const todo = {
    id: 1,
    text: "hello",
}

/**
 * Calculate tax
 * @param {number} amount . total amount
 * @param {number} tax - tax percentage
 * @return {string} - total with a dollar sign
*/

const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`
}

/**
 * A Employee
 * @typeof {Object} Employee
 * @property {number} id - Employee ID
 * @property {string} name - Employee name
 * @property {string|number} [age] - Employee age
{optional}
 * @property {boolean} isActive - Employee is active
*/

/**
 * @type {Employee}
*/

const Employee = {
    id: 1,
    name: "Akiyama Mio",
    age: 22,
    isActive: true,
}

/**
 * Class to create a user object
*/

class User {
    /**
     * @param {Object} userInfo Information about the user
    */

    constructor(userInfo) {
        /**
         * @property {string} name Users name
        */
        this.name = userInfo.name
        /**
         * @property {string} age Users age
        */
        this.age = userInfo.age
    }
    /**
     * @property {Function} greet A greeting with name and age
     * @return void
    */
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
    }
}

/**
 * User one
 * see {@link User}
*/
const user1 = new User({
    name: "Kazuma",
    age: 21,
})
