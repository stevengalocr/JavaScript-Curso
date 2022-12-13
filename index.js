function countHours(year, holidays) {
    return holidays.reduce((current, date) => {
      const currentDate = new Date(`${date}/${year}`)
      const dayOfWeek = currentDate.getDay()
      return dayOfWeek !== 0 && dayOfWeek !== 6 ? current + 2 : current
    }, 0)
  }
  
  const year = 2022
  const holidays = ['01/06', '04/01', '12/25'] 
  
  console.log(countHours(year, holidays))