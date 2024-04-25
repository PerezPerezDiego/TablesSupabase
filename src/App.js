import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';

import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://vqkdzggmcljkqewgwtwa.supabase.co", 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxa2R6Z2dtY2xqa3Fld2d3dHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMTc0NDYsImV4cCI6MjAyODg5MzQ0Nn0.pjgi6N4W4jDw87KhJq13EPtyiMuzmrjVn5TtrWRsTEY");
  
      

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    getProductos();
  },[]);

  async function getProductos(){
    const {data} = await supabase.from("productos").select();
    setProductos(data);
  }
    return (
      
        <div className="App">
          <ul>
        {productos.map((productos)=>(
        <li key={productos.descripcion}>{productos.descripcion}</li>
        ))}
      </ul>
            <NavigationMenu />
            {/* Aquí va el resto de tu aplicación */}
        </div>
    );
}

export default App;
