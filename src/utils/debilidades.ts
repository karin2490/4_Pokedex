
export const debilidades : { [key: string]: { weaknesses: string[]}} = 
    {
        normal: {
            weaknesses: ["Lucha"]
        },
        fuego: {
            weaknesses: ["Agua", "Roca", "Tierra"]
        },
        planta: {
            weaknesses: ["Fuego", "Volador", "Hielo", "Psíquico"]
        },
        agua: {
            weaknesses: ["Planta", "Eléctrico"]
        },
        electrico: {
            weaknesses: ["Tierra"]
        },
        psiquico: {
            weaknesses: ["Bicho", "Fantasma", "Siniestro"]
        },
        fantasma: {
            weaknesses: ["Fantasma", "Siniestro"]
        },
        dragon: {
            weaknesses: ["Hielo", "Hada", "Dragón"]
        },
        lucha: {
            weaknesses: ["Lucha"]
        },
        veneno: {
            weaknesses: ["Veneno", "Acero"]
        },
        tierra: {
            weaknesses: ["Tierra", "Eléctrico", "Roca"]
        },
        roca: {
            weaknesses: ["Agua", "Roca", "Eléctrico"]
        },
        bicho: {
            weaknesses: ["Bicho", "Fantasma", "Siniestro"]
        },
        acero: {
            weaknesses: ["Veneno", "Acero"]
        }
      }
      