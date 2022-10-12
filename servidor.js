/* aqui se construye el servidor*/
const express=require("express");

const app = express();
const puerto = 3001;


app.get('/', ( req, res ) => {
   res.send("estas consultando la raiz de la API");
});

app.get('/persona', ( req, res ) => {
   let persona= {
      "nombre": "Diego Fernando",
      "Apellido": "montalvo monsalve",
      "estadoCivil": "Union libre",
      "tieneHijos": "false",
      "edad": "25",
      "medicoAsignado": "{\"id\":123,\"nombre\":\"medico 1\",\"licencia\":\"123456\" }" 
      } 
});
app.listen(puerto,()=>{
   console.log("El servidor esta en ejecucion en el puerto" + puerto);

});
    
     
     


