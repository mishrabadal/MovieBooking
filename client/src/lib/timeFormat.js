const timeFormat =(minutes)=>{
    const hours = Math.floor(minutes/60)
    const minuteaRemainder = minutes%60
    return `${hours}h ${minuteaRemainder}m`
}
export default timeFormat