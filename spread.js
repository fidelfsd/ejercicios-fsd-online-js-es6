const spread = (name, ps, atk, def, speed) => {
   console.log("Nombre: ", name);
   console.log("Vida: ", ps);
   console.log("Ataque: ", atk);
   console.log("Defensa: ", def);
   console.log("Velocidad: ", speed);
};
let Pokemon = ["Pikachu", 35, 55, 40, 90];

spread(Pokemon[0], Pokemon[1], Pokemon[2], Pokemon[3], Pokemon[4]);
spread(...Pokemon);
