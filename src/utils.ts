let reducedValue;
const bigTaskReducer = (int:number)=>{
    const sum = new Array(int)
    .fill(0)
    .map((el,idx)=>el+idx)
    .reduce((sum,el)=>sum+el,0);
    return sum;
}

export function runBigtaskReducer(int:number){
    reducedValue = bigTaskReducer(int);
    console.log(reducedValue);
    return reducedValue;

}

export async function runBigtaskAsyncReducer(int:number){
    reducedValue = bigTaskReducer(int);
    console.log(reducedValue);
    return reducedValue;

}