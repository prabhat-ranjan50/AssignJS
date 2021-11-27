var personA = {
    firstName: "Prabhat",
    lastName: "Ranjan",
    OfficeAddress: "Gopalganj"
};
var personB = {
    firstName: "Shivam",
    lastName: "Rastogi",
    OfficeAddress: "Patna"
};
var personC = {
    firstName: "Masoom",
    lastName: "Singh",
    OfficeAddress: "Laxmi Nagar"
};

function display(person) {
    console.log("First Name :" + person.firstName);
    console.log("Last Name:" + person.lastName);
    console.log("Office Address :" + person.OfficeAddress);

}
display(personA);
display(personB);
display(personC);