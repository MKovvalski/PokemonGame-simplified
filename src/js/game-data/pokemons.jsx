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
            stamina: 10,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: a,
            gif_calm: aa,
            gif_back: aaa,
            attacks: [
                {
                    id: "ember",
                    power: 40,
                    nature: "fire",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "scratch",
                    power: 40,
                    nature: "physical",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "growl",
                    power: 4,
                    nature: "none",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_myself",
                    accuracy: 100
                },
                {

                    id: "smoke screen",
                    power: 4,
                    nature: "none",
                    target: "def",
                    targetName: "defence",
                    type: "modifying_enemy",
                    accuracy: 100

                }
            ]
        },
        {
            id: "charmander",
            lvl: 10,
            atk: 52,
            def: 43,
            specAtk: 60,
            specDef: 50,
            speed: 65,
            stamina: 39,
            gif_attack: b,
            gif_calm: bb,
            gif_back: bbb,
            attacks: [
                {
                        id: "ember",
                        power: 40,
                        nature: "fire",
                        type: "special",
                        accuracy: 100
                },
                {
                        id: "scratch",
                        power: 40,
                        nature: "physical",
                        type: "normal",
                        accuracy: 100
                },
                {
                        id: "growl-heal",
                        power: 4,
                        nature: "none",
                        target: "stamina",
                        targetName: "stamina",
                        type: "modifying_myself",
                        accuracy: 100
                },
                {

                        id: "smoke screen",
                        power: 4,
                        nature: "none",
                        target: "def",
                        targetName: "defence",
                        type: "modifying_enemy",
                        accuracy: 100

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
            stamina: 10,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: c,
            gif_calm: cc,
            attacks: [
                {
                    id: "ember",
                    power: 40,
                    nature: "fire",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "scratch",
                    power: 40,
                    nature: "physical",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "growl",
                    power: 4,
                    nature: "none",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_myself",
                    accuracy: 100
                },
                {

                    id: "smoke screen",
                    power: 4,
                    nature: "none",
                    target: "def",
                    targetName: "defence",
                    type: "modifying_enemy",
                    accuracy: 100

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
            stamina: 10,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: d,
            gif_calm: dd,
            attacks: [
                {
                    id: "ember",
                    power: 40,
                    nature: "fire",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "scratch",
                    power: 40,
                    nature: "physical",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "growl",
                    power: 4,
                    nature: "none",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_myself",
                    accuracy: 100
                },
                {

                    id: "smoke screen",
                    power: 4,
                    nature: "none",
                    target: "def",
                    targetName: "defence",
                    type: "modifying_enemy",
                    accuracy: 100

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
            stamina: 10,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: f,
            gif_calm: ff,
            gif_back: fff,
            attacks: [
                {
                    id: "ember",
                    power: 40,
                    nature: "fire",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "scratch",
                    power: 40,
                    nature: "physical",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "growl",
                    power: 4,
                    nature: "none",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_myself",
                    accuracy: 100
                },
                {

                    id: "smoke screen",
                    power: 4,
                    nature: "none",
                    target: "def",
                    targetName: "defence",
                    type: "modifying_enemy",
                    accuracy: 100

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
            stamina: 10,
            img_back_view: "fill that spot later",
            img_front_view: "fill that spot later",
            img_thumbnail: "fill that later as well",
            gif_attack: e,
            gif_calm: ee,
            attacks: [
                {
                    id: "ember",
                    power: 40,
                    nature: "fire",
                    type: "special",
                    accuracy: 100
                },
                {
                    id: "scratch",
                    power: 40,
                    nature: "physical",
                    type: "normal",
                    accuracy: 100
                },
                {
                    id: "growl",
                    power: 4,
                    nature: "none",
                    target: "atk",
                    targetName: "attack",
                    type: "modifying_myself",
                    accuracy: 100
                },
                {

                    id: "smoke screen",
                    power: 4,
                    nature: "none",
                    target: "def",
                    targetName: "defence",
                    type: "modifying_enemy",
                    accuracy: 100

                }
            ]
        },

    ];

export default pokemons;