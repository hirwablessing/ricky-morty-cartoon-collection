export const createPaginationRange = (start : number, end : number) => {
    let a = start
    let range : Array<number> = []

    while (a <= end) {
        range.push(start ++)
        a ++
    }    
    
    return range
}   