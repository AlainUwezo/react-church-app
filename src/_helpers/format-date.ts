const FormatDate = (date: Date)=>{
    return 'Le ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(); 
}

export default FormatDate;