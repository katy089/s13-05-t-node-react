import { API_URL_MATCHLIST } from "../../config/api";
import axios from "axios";

export const eventos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Metallica",
    city: "Buenos Aires",
    redirect: "https://www.metallica.com",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "AC/DC",
    city: "La Plata",
    redirect: "https://www.acdc.com/tour/",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Foo Fighters",
    city: "Rosario",
    redirect: "https://foofighters.com/",
  },
];

export const obtenerDatosUsuario = async (tuneMatch) => {
  try {
    let matchIds = [];
    if (Array.isArray(tuneMatch)) {
      // Verificar si tuneMatch es un array de objetos con una propiedad 'id'
      if (
        tuneMatch.length > 0 &&
        typeof tuneMatch[0] === "object" &&
        "id" in tuneMatch[0]
      ) {
        matchIds = tuneMatch.map((match) => match.id);
      } else {
        matchIds = tuneMatch; // Si no es un array de objetos, se asume que es un array de ids
      }
    } else {
      throw new Error("El parametro tuneMatch DEBE ser un ARRAY."); //hasta ahi llegamos con las comprobaciones, mandenlo en un array ;D
    }

    const perfilesUsuarios = await Promise.all(
      matchIds.map(async (id) => {
        try {
          const perfilResponse = await axios.get(
            API_URL_MATCHLIST.replace(":id", id)
          );

          if (!perfilResponse.data) {
            throw new Error(
              `Error al obtener el perfil del usuario con ID: ${id}`
            );
          }

          return perfilResponse.data;
        } catch (error) {
          throw new Error(
            `Error al obtener el perfil del usuario con ID: ${id}`
          );
        }
      })
    );

    return perfilesUsuarios;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// export const tuneMatch = [
//   {
//     id: 1,
//     nombre: "María",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Rock", "Pop"],
//     bandas: ["Banda 1", "Banda 2"],
//     distancia: 10, // en km
//   },
//   {
//     id: 2,
//     nombre: "Juan",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Electrónica", "Indie"],
//     bandas: ["Banda 3", "Banda 4"],
//     distancia: 15,
//   },
//   {
//     id: 3,
//     nombre: "Ana",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Reggae", "Hip Hop"],
//     bandas: ["Banda 5", "Banda 6"],
//     distancia: 20, // en kilómetros
//   },
//   {
//     id: 4,
//     nombre: "Pedro",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Jazz", "Blues"],
//     bandas: ["Banda 7", "Banda 8"],
//     distancia: 25, // en kilómetros
//   },
//   {
//     id: 5,
//     nombre: "Laura",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Funk", "Soul"],
//     bandas: ["Banda 9", "Banda 10"],
//     distancia: 30, // en kilómetros
//   },
//   {
//     id: 6,
//     nombre: "Carlos",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["R&B", "Country"],
//     bandas: ["Banda 11", "Banda 12"],
//     distancia: 35, // en kilómetros
//   },
//   {
//     id: 7,
//     nombre: "Sandra",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Rock", "Pop"],
//     bandas: ["Banda 1", "Banda 2"],
//     distancia: 10, // en km
//   },
//   {
//     id: 8,
//     nombre: "David",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Electrónica", "Indie"],
//     bandas: ["Banda 3", "Banda 4"],
//     distancia: 15,
//   },
//   {
//     id: 9,
//     nombre: "Andrea",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Reggae", "Hip Hop"],
//     bandas: ["Banda 5", "Banda 6"],
//     distancia: 20, // en kilómetros
//   },
//   {
//     id: 10,
//     nombre: "Miguel",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Jazz", "Blues"],
//     bandas: ["Banda 7", "Banda 8"],
//     distancia: 25, // en kilómetros
//   },
//   {
//     id: 11,
//     nombre: "Marta",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Funk", "Soul"],
//     bandas: ["Banda 9", "Banda 10"],
//     distancia: 30, // en kilómetros
//   },
//   {
//     id: 12,
//     nombre: "José",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["R&B", "Country"],
//     bandas: ["Banda 11", "Banda 12"],
//     distancia: 35, // en kilómetros
//   },
//   {
//     id: 13,
//     nombre: "Elena",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Rock", "Pop"],
//     bandas: ["Banda 1", "Banda 2"],
//     distancia: 10, // en km
//   },
//   {
//     id: 14,
//     nombre: "Francisco",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Electrónica", "Indie"],
//     bandas: ["Banda 3", "Banda 4"],
//     distancia: 15,
//   },
//   {
//     id: 15,
//     nombre: "Paula",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Reggae", "Hip Hop"],
//     bandas: ["Banda 5", "Banda 6"],
//     distancia: 20, // en kilómetros
//   },
//   {
//     id: 16,
//     nombre: "Alejandro",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Jazz", "Blues"],
//     bandas: ["Banda 7", "Banda 8"],
//     distancia: 25, // en kilómetros
//   },
//   {
//     id: 17,
//     nombre: "Lucía",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["Funk", "Soul"],
//     bandas: ["Banda 9", "Banda 10"],
//     distancia: 30, // en kilómetros
//   },
//   {
//     id: 18,
//     nombre: "Pablo",
//     img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//     generos: ["R&B", "Country"],
//     bandas: ["Banda 11", "Banda 12"],
//     distancia: 35, // en kilómetros
//   },
// ];
