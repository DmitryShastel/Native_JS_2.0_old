import {StudentType} from "./JS_TS_Objects";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const changeStatus = (student: StudentType, isActive: boolean) => {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
   return student.address.city.title === cityName
}




