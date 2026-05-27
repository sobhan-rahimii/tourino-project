export const isValidMobile = (mobile)=>{
    let regex = new RegExp("^[0][9][0-9][0-9]{8,8}$").test(mobile)
    return regex
}