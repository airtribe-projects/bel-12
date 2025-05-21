const courses = [
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
]


const find = () => {
    return courses;
}

const create = (course) => {
    course.id = courses.length + 1;
    courses.push(course);
    return course;  
};

const findById = (courseId) => {
    const course = courses.find(c => c.id === parseInt(courseId));
    if (!course) throw new Error("Course not found");
    return course;
}



module.exports = {create, find, findById};