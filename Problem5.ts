
type UserData = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}


function filterActiveUsers(value: UserData[]): UserData[] {
    return value.filter(data => data.isActive)
}







