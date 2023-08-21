const currentYear = new Date().getFullYear()

console.log(currentYear)

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`)

const copied = { ...holidays[christmas] }
copied.name = 'X-mas'
const correctDate = new Date(copied.date)

correctDate.setHours(0, 0, 0, 0)

const isEarlier = correctDate < holidays[christmas].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate

const date = copied.date.getDate() 
const month = copied.date.getMonth() + 1
const yearCopied = copied.date.getFullYear()
let holidayId = holidays[christmas].id !== holidays[6].id



console.log( `ID change: ${holidayId}` )
console.log(`Name change: ${copied.name}`)
console.log(`Date change: ${date}/${month}/${yearCopied}`)

holidays[futureId] = copied



const firstHolidayTimestamp = Math.min(
    new Date (holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date (holidays[3].date).getTime(),
    new Date (holidays[4].date).getTime(),
    new Date (holidays[5].date).getTime(),
    new Date (holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date (holidays[0].date),
    new Date (holidays[1].date),
    new Date (holidays[2].date),
    new Date (holidays[3].date),
    new Date (holidays[4].date),
    new Date (holidays[5].date),
    new Date (holidays[6].date),
    new Date (holidays[7].date),
    new Date (holidays[8].date),
)

const firstDay = ( new Date(firstHolidayTimestamp)).getDate() 

const firstMonth = (new Date (firstHolidayTimestamp)).getMonth() + 1

const lastDay =  (new Date(lastHolidayTimestamp)).getDate()

const lastMonth = (new Date(lastHolidayTimestamp)).getMonth() + 1

console.log(`${firstDay.toString().padStart(2 , "0")}/ ${firstMonth.toString().padStart(2 , '0')}/ ${currentYear}`)
console.log(`${lastDay.toString().padStart(2 , "0")}/${lastMonth.toString().padStart(2 , "0")}/${currentYear}`)

let randomHoliday = (holidays[Math.floor((Math.random() * 10))]).date





if ( randomHoliday == "16 December 2023") {
    randomHoliday = new Date("16 December 2023")
}
const randomDay = (new Date(randomHoliday)).getDate()
const randomMonth = (new Date(randomHoliday)).getMonth() +1


console.log(`${randomDay.toString().padStart(2 ,"0")}/${randomMonth.toString().padStart(2 ,"0")}/${currentYear}`);
