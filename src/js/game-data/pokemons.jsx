let a = require('../../imgs/bulba-attack.gif');
let aa = require('../../imgs/bulba-calm.gif');
let aaa = require('../../imgs/Bulbasaur_Back.gif');
let b = require('../../imgs/char-attack.gif');
let bb = require('../../imgs/char-calm.gif');
let bbb = require('../../imgs/Charmander_Back.gif');
let c = require('../../imgs/squil-attack.gif');
let cc = require('../../imgs/squil-calm.gif');
let d = require('../../imgs/pika-attack.gif');
let dd = require('../../imgs/pika-calm.gif');
let e = require('../../imgs/toge-attack.gif');
let ee = require('../../imgs/toge-calm.gif');
let f = require('../../imgs/butterfly-calm.gif');
let ff = require('../../imgs/butterfly-calm.gif');
let fff = require('../../imgs/Butterfree_back.gif');


const pokemons =  [
        {
            id: "bulbasaur",
            lvl: 10,
            atk: 80,
            def: 90,
            specAtk: 110,
            specDef: 90,
            speed: 60,
            stamina: 132,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: a,
            gif_calm: aa,
            gif_back: aaa,
            attacks: [
                {

                    id: "leafattack",
                    power: 20,
                    charges: 15,
                    type: "special",
                    accuracy: 7 //z 10 na mathRandom

                },
                {

                    id: "stomp",
                    power: 20,
                    charges: 20,
                    type: "normal",
                    accuracy: 8.0

                },
                {

                    id: "super-recover",
                    power: 40,
                    charges: 2,
                    type: "heal",
                    accuracy: 7.0

                },
                {

                    id: "superPunch",
                    power: 35,
                    charges: 3,
                    type: "normal",
                    accuracy: 3

                }
            ]

        },
        {
            id: "charmander",
            lvl: 10,
            atk: 100,
            def: 80,
            specAtk: 120,
            specDef: 80,
            speed: 80,
            stamina: 132,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: b,
            gif_calm: bb,
            gif_back: bbb,
            attacks: [
                {

                        id: "fireAttack",
                        power: 20,
                        charges: 15,
                        type: "special",
                        accuracy: 7 //z 10 na mathRandom

                },
                {

                        id: "punch",
                        power: 15,
                        charges: 20,
                        type: "normal",
                        accuracy: 9.5

                },
                {

                        id: "recover",
                        power: 20,
                        charges: 5,
                        type: "heal",
                        accuracy: 11

                },
                {

                        id: "superPunch",
                        power: 35,
                        charges: 3,
                        type: "normal",
                        accuracy: 3

                }
              ]
        },
        {
            id: "Squirtle",
            lvl: 10,
            atk: 80,
            def: 90,
            specAtk: 110,
            specDef: 90,
            speed: 60,
            stamina: 132,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: c,
            gif_calm: cc,
            attacks: [
                {

                    id: "watergun",
                    power: 20,
                    charges: 15,
                    type: "special",
                    accuracy: 7

                },
                {

                    id: "scrach",
                    power: 20,
                    charges: 20,
                    type: "normal",
                    accuracy: 8.0

                },
                {

                    id: "water-recover",
                    power: 40,
                    charges: 2,
                    type: "heal",
                    accuracy: 7.0

                },
                {

                    id: "tailsmack",
                    power: 35,
                    charges: 3,
                    type: "normal",
                    accuracy: 3

                }
            ]

        },
        {
            id: "Pikachu",
            lvl: 10,
            atk: 80,
            def: 90,
            specAtk: 110,
            specDef: 90,
            speed: 60,
            stamina: 132,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: d,
            gif_calm: dd,
            attacks: [
                {

                    id: "leafattack",
                    power: 20,
                    charges: 15,
                    type: "special",
                    accuracy: 7 //z 10 na mathRandom

                },
                {

                    id: "stomp",
                    power: 20,
                    charges: 20,
                    type: "normal",
                    accuracy: 8.0

                },
                {

                    id: "super-recover",
                    power: 40,
                    charges: 2,
                    type: "heal",
                    accuracy: 7.0

                },
                {

                    id: "superPunch",
                    power: 35,
                    charges: 3,
                    type: "normal",
                    accuracy: 3

                }
            ]

        },
        {
            id: "Butterfly",
            atk: 80,
            def: 90,
            specAtk: 110,
            specDef: 90,
            speed: 60,
            stamina: 132,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: f,
            gif_calm: ff,
            gif_back: fff,
            attacks: [
                {

                    id: "leafattack",
                    power: 20,
                    charges: 15,
                    type: "special",
                    accuracy: 7 //z 10 na mathRandom

                },
                {

                    id: "stomp",
                    power: 20,
                    charges: 20,
                    type: "normal",
                    accuracy: 8.0

                },
                {

                    id: "super-recover",
                    power: 40,
                    charges: 2,
                    type: "heal",
                    accuracy: 7.0

                },
                {

                    id: "superPunch",
                    power: 35,
                    charges: 3,
                    type: "normal",
                    accuracy: 3

                }
            ]

        },
        {
            id: "Togepi",
            atk: 80,
            def: 90,
            specAtk: 110,
            specDef: 90,
            speed: 60,
            stamina: 132,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: e,
            gif_calm: ee,
            attacks: [
                {

                    id: "leafattack",
                    power: 20,
                    charges: 15,
                    type: "special",
                    accuracy: 7 //z 10 na mathRandom

                },
                {

                    id: "stomp",
                    power: 20,
                    charges: 20,
                    type: "normal",
                    accuracy: 8.0

                },
                {

                    id: "super-recover",
                    power: 40,
                    charges: 2,
                    type: "heal",
                    accuracy: 7.0

                },
                {

                    id: "superPunch",
                    power: 35,
                    charges: 3,
                    type: "normal",
                    accuracy: 3

                }
            ]

        },

    ];

export default pokemons;