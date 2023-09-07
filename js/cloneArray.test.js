const cloneArray  =  require("./cloneArray");


test('Test if cloned properly',()=>{
    const arr = [1,2,3]
    expect(cloneArray(arr)).toEqual(arr);
})
