

/// "pubDate": "2025-05-20 04:28:00",



export function getFormatedDate(publishUTCDate){
    console.log(`Thisi is date ${publishUTCDate}`)
    const date = new Date(publishUTCDate.replace(" ","T")); // Conver to ISO format
    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth()+1).padStart(2,'0');
    const year = date.getFullYear();


    const formatted = `${day}/${month}/${year}`;
    return formatted;
}