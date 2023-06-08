module.exports= {
    countSameNamePets(arrOBjClass) {
        const petNames = {};
        if(arrOBjClass!=undefined)
        {
            arrOBjClass.forEach(instance=>{
                
                petNames[instance.getName()] = petNames[instance.getName()] + 1 || 1
            })
            console.log('Number of pets with the same name:');
            console.log(petNames)
        }
    },
    createListNamePetsSold(arrDataResp){
        if(arrDataResp!=undefined)
            return arrDataResp.map(data=>{
                return {id:data.id,name:data.name}
            })
    }
}