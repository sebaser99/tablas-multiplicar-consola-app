const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, l = true, h) => {
    try{
       
    
    
    
        let salida = '';
        let consola = '';
    
        for(let i= 1; i <= h; i++){
            salida += `${base} x  ${i}  =  ${base * i}\n`
            consola += `${base}   ${'x'.blue}   ${i}   ${'='.blue}  ${base * i}\n`
        }
        
        if(l){
            console.log('======================'.green)
            console.log('     TABLA DEL'.red, colors.yellow(base))
            console.log('======================'.green)
            console.log(consola)}
        // await fs.writeFile(`tabla-${base}.txt`, salida, (error) => {
        //     if(error) throw error
            
        // })
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla${base}.txt`

    } catch(err) {
        throw error
    }
}

module.exports = {
    crearArchivo
}