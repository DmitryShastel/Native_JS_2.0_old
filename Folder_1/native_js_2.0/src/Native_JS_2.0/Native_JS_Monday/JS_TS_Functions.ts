import {CityType, GovermentBuildingsType, StudentType} from "./JS_TS_Objects";
import {city} from "./Unit_Tests_Monday/monday.test";


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

export const addMoneyToBudget = (govermentBuildings: GovermentBuildingsType, budget: number) => {
    govermentBuildings.budget += budget;
}


