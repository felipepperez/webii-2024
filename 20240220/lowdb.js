import { JSONFilePreset } from 'lowdb/node';

// Read or create db.json
const defaultData = { palavras: [] };
const db = await JSONFilePreset('db.json', defaultData);


const { palavras } = db.data
const first = palavras.at(0)
const results = palavras.find((palavra) => palavra.id==1)

if(!results){
    db.data.palavras.push({id:1, palavra:'Abacaxi',significado:'Planta originária da América tropical'});
}

await db.write();