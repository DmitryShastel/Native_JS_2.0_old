import {AddressType, CityType, GovermentBuildingsType, HouseType, StudentType} from "./JS_TS_Objects";
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

export const repairHouse = (houseType: HouseType) => {
    houseType.repaid = true
}

export const toFireStaff = (goverment: GovermentBuildingsType, staffCountToFire: number) => {
    goverment.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovermentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export const demolishHouseOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(e => e.address.street.title != street)
}

export const getBuildingsWithStaffCountGreaterThen = (govermentBuildings: Array<GovermentBuildingsType>, number: number) => {
    return govermentBuildings.filter(e => e.staffCount > number)
}























