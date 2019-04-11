const f = arr => {
    let y = 0 , x = 0 , dir = ''; 
    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] === "SOUTH")
            y += 1     
        else if(arr[i] === "NORTH")
            y -= 1       
        if(arr[i] === "EAST")
            x += 1       
        else if(arr[i] === "WEST")
            x -= 1    
    }
    
    let res = [];
    for(let i = 0; i < Math.abs(y); i++){ 
        if(y > 0 )
            res.push('SOUTH')
        if(y < 0 )
            res.push('NORTH')
    }
    for(let i = 0; i < Math.abs(x); i++){ 
        if(x > 0 )
            res.push('EAST')
        if(x < 0 )
            res.push('WEST')
    }
    return res
} 

const fun = (arr) => {
    let x = 0, y = 0;
    for(let i = 0; i < arr.length; i++){ 
        if(i !== 0 && arr[i - 1].length === 4 && arr[i].length === 4){
            if([...arr[i - 1]][0] !== [...arr[i]][0]){
                console.log([...arr[i - 1]][0])
                console.log([...arr[i]][0])
            }else {
                if([...arr[i]] === 'EAST')
                    x += 1
                if([...arr[i]] === 'WEST')
                    x -= 1
                console.log([...arr[i - 1]][0])
                console.log([...arr[i]][0])
            }
        } 
        else if(i !== 0 && arr[i - 1].length === 5 && arr[i].length === 5){
            if([...arr[i - 1]][0] !== [...arr[i]][0]){
                console.log([...arr[i - 1]][0])
                console.log([...arr[i]][0])
            }else {
                if([...arr[i]] === 'SOUTH')
                    y += 1
                if([...arr[i]] === 'NORTH')
                    y -= 1 
                console.log([...arr[i - 1]][0])
                console.log([...arr[i]][0])
            }
        }
    }
}

const func = (arr) => { 
    return arr.reduce((acc, el, i, mass ) => { 
        console.log(el+' '+i+' '+mass[i+1])
        if(i === arr.length - 1)
            acc.push(el)
        else if( el === "SOUTH" && mass[i+1] !== "NORTH")
            acc.push(el)    
        else if(  el === "NORTH" && mass[i+1] !== "SOUTH")
            acc.push(el)        
        else if(  el === "WEST" && mass[i+1] !== "EAST")
            acc.push(el)      
        else if(  el === "EAST" && mass[i+1] !== "WEST")
            acc.push(el)
            
        return acc
    }, [])
}

console.log(func(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))