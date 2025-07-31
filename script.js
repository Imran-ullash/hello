const roll = [1,2,3,4,,5,6,7,8,9,10];
const roll2 = [1,2,3,4,5,6,7,8,9,10];
const result = (roll.length === roll2.length ? "Equal length" : "Not equal length");
console.log(result);

// const result2 = user.JOb;
// console.log(result2 + result);

const user = {
    name : 'Imran Mahmud Ullash',
    address: 'Aftabnagar , Dhaka',
    JOb : "Wordpress developer",
    class : {
        forJob : 'bdcalling',
        forCertificate : {
            highSchool : 'Kawaljani High School',
            primary : {
                year2 : 'Nursery',
                year3Roll : [12, 12, 43, 45]
            }
        }
    }

};

const result3 = user.class.forCertificate.primary.year3Roll[0];
console.log(result3);


