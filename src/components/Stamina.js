function delayWithTimer(flag) {
    let check = new Promise((resolve, reject)=>{
        if (flag === false) {
            setTimeout(() => {
                resolve(true)
            }, 2000)
        }
    })
    return check
}
export default delayWithTimer
