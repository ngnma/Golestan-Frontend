export const setTermName = (value) => ({
    type: 'SAVETERMNAME',
    payload: value
});

export const setTermID = (value) => ({
    type: 'SAVETERMID',
    payload: value
});

export const setCourseId = (value) =>({
    type: 'SAVECOURSEID',
    payload: value
});

export const setCourseFullName = (value) =>({
    type: 'SAVECOURSEFULLNAME',
    payload: value
});

export const setI2toI5Add = (flag,first_name,last_name,id,national_code,faculty,major,peroffesor,entry_year) =>({
    type: 'I2TOI5NEW',
    payload: {flag,first_name,last_name,id,national_code,faculty,major,peroffesor,entry_year}
});

export const setI3TOI9Add =(flag,first_name,last_name,id,national_code,faculty,major,level,entry_year)=>({
    type: 'I3TOI9NEW',
    payload :{flag,first_name,last_name,id,national_code,faculty,major,level,entry_year}
});

export const setI4TOI8Add =(flag,first_name,last_name,id,national_code,faculty,major,level,entry_year)=>({
    type: 'I4TOI8NEW',
    payload :{flag,first_name,last_name,id,national_code,faculty,major,level,entry_year}
});