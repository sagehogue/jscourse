class TownElement {
    constructor(name, yearOfCreation) {
        this.name = name;
        this.age = 2018 - yearOfCreation;
    }
}

class Park extends TownElement {
    constructor(name, yearOfCreation, area, numOfTrees) {
        super(name, yearOfCreation);
        this.area = area;
        this.trees = numOfTrees;
        this.treeDensity = this.determineTreeDensity()
    }
    determineTreeDensity() {
        return (this.trees / this.area)
    }
}

class Street extends TownElement {
    constructor(name, yearOfCreation, length=undefined) {
        super(name, yearOfCreation);
        this.length = length;
        this.size = determineSize();
    }
    determineSize() {
        if (this.length === undefined) {'normal'}
        else {
            this.length < 1000 ? 'tiny' : this.length < 2000 ? 'small' : this.length < 3000 ? 'normal' : this.length < 4000 ? 'big' : 'huge';
        }
    }
}
let parkArray = [];
const powellPark = new Park("Powell Park", 1920, 4, 65);
const clintonPark = new Park("Clinton Park", 1985, 2, 30);
const forestPark = new Park("Forest Park", 1940, 35, 2500);
parkArray.push(powellPark);
parkArray.push(clintonPark);
parkArray.push(forestPark);
parkMap = new Map();
parkMap.set('sum', 0);
parkMap.set('count', 0);
console.log(`-----PARKS REPORT-----`)
for (park of parkArray) {
    let sum = parkMap.get('sum');
    let count = (parkMap.get('count'));
    parkMap.set('sum', (sum += park.age))
    parkMap.set('count', count += 1)
    console.log(`${park.name} has a tree density of  ${park.treeDensity} per square kilometer.`);
}
console.log(`Our ${parkMap.get('count')} parks have an average age of ${(parkMap.get('sum') / parkMap.get('count'))}`)

console.log(`-----STREETS REPORT------`)