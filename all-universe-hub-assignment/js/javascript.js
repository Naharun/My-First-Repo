const allUniverseHub = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/01`
    const res = await fetch(url);
    const data = await res.json();
    displayfeatures(data.data);
} 

const displayfeatures = features =>{
    console.log(features);
}

allUniverseHub();
