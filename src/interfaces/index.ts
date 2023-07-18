interface iUser {
    id: string;
    name: string;
    surname: string;
    email: string;
    pwd: string;
}

interface iCourse {
    id: string;
    course: string;
}

export { iUser, iCourse }