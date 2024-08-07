let implementedJokers = [
  {
    name: "Calling Card",
    text: [
      "This Joker gains {X:red}X0.25{} Mult whenever you defeat a {C:attention}Boss Blind{} or trigger its {C:attention}ability{}",
      "{C:inactive}(Currently {}{X:red}X1{}{C:inactive} Mult){}"
    ],
    image_url: "img/j_calling_card.png",
    rarity: "Uncommon"
  },
  
  {
    name: "Pool Table",
    text: [
      "If first hand of round scores all {C:attention}non-face cards{}, creates the {C:planet}Planet{} card of the played {C:attention}poker hand{}",
      "{C:inactive}(Must have room)"
    ],
    image_url: "img/j_pool_table.png",
    rarity: "Rare"
  },
  {
    name: "Ghost Cola",
    text: [
      "Sell this card to create a {C:attention}Negative Tag{} and a random {C:dark_edition}Negative{} {C:spectral}Spectral{} card."
    ],
    image_url: "img/j_ghost_cola.png",
    rarity: "Rare"
  }
]

let inProgressJokers = [
  {
    name: "Quick Fix",
    text: [
      "+2 Hand Size. 1 in 4 chance to break at the end of the round.",
    ],
    image_url: "img/j_quick_fix.png",
    rarity: "Common"
  },
  {
    name: "Sacrificial Lamb",
    text: [
      "Gains +5 Mult when any card or Joker is destroyed."
    ],
    image_url: "img/j_sacrificial_lamb.png",
    rarity: "Uncommon"
  },
  {
    name: "Skydiver",
    text: [
      "3x Mult if all scored cards are equal to or lower than the lowest ranked card scored this round. Lowest card is updated at the end of played hand."
    ],
    image_url: "img/j_skydiver.png",
    rarity: "Uncommon"
  },
  {
    name: "Mismatched Sock",
    text: [
      "This Joker gains +3 Mult if played hand contains no pairs."
    ],
    image_url: "img/j_mismatched_sock.png",
    rarity: "Uncommon"
  },
  {
    name: "Nachos",
    text: [
      "{X:chips}X2{} Chips, loses {X:chips}X0.05{} Chips per {C:attention}card{} discarded"
    ],
    image_url: "img/j_nachos.png",
    rarity: "Common"
  }
]

let conceptJokers = [
  {
    name: "Wish You Were Here",
    text: [
      "Gives Mult equal to triple this joker's Sell Value. After clearing a blind, this joker gains +1 Sell Value."
    ],
    image_url: "img/j_wish_you_were_here.png",
    rarity: "Uncommon"
  },
  {
    name: "Stamp",
    text: [
      "Gains 25 chips when any card with a seal is scored"
    ],
    image_url: "img/j_stamp.png",
    rarity: "Rare"
  },
  {
    name: "Solar System",
    text: [
      "Gains 2x mult for every level all 9 base planets share."
    ],
    image_url: "img/j_solar_system.png",
    rarity: "Rare"
  },
  {
    name: "Furioso",
    text: [
      "Each uniquely scored rank adds 0.2X mult to this joker. Resets after defeating a boss blind."
    ],
    image_url: "img/j_furioso.png",
    rarity: "Uncommon"
  },
  {
    name: "Pride Flag",
    text: [
      "Gains +3 Mult if scored hand contains four unique suits"
    ],
    image_url: "img/j_pride_flag.png",
    rarity: "Common"
  },
  {
    name: "Summoning Circle",
    text: [
      "Playing 5 of a Kind creates a non negative copy of a consumable if a spot is available."
    ],
    image_url: "img/j_summoning_circle.png",
    rarity: "Rare"
  },
  {
    name: "Hole in One",
    text: [
      "If first hand of round cleared the blind, double the sell value of all jokers and consumables. If sold, all Jokers and Consumables are set to a sell value of $0"
    ],
    image_url: "img/j_hole_in_one.png",
    rarity: "Rare"
  },
  {
    name: "Derecho",
    text: [
      "If scored hand contained only dark suits (Spade, Club) this card gains +0.1 X-Mult"
    ],
    image_url: "img/j_derecho.png",
    rarity: "Uncommon"
  },
  {
    name: "Forgery",
    text: [
      "Copies the effect of a random joker every hand. If a joker provides Mult, X-Mult, or Chips, the provided amount is between 0.5x and 1.5x times the original copied amount"
      ],
    image_url: "img/j_forgery.png",
    rarity: "Uncommon"
  },
  {
    name: "Solemn Lament",
    text: [
      "Retriggers first scored card of hand once for every remaining hand or discard, uses the lowest of these two numbers. Aces, 6s, and 8s give +3 Mult when scored."
      ],
    image_url: "img/j_solemn_lament.png",
    rarity: "Uncommon"
  },
  {
    name: "Shopping Center",
    text: [
      "Shops have an additional card slot."
      ],
    image_url: "img/j_shopping_center.png",
    rarity: "Common"
  },
  {
    name: "Union Card",
    text: [
      "Sell Value of all Cards is Locked at 0 until this joker is sold. Gives xMult and xChips equal to the number of scored Red cards in played hand (Diamonds, Hearts)"
      ],
    image_url: "img/j_union_card.png",
    rarity: "Rare"
  }
]

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Voucher"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Pack"
  // },
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (implementedJokers.length === 0) {
  document.querySelector(".implementedJokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".implementedJokers");
  add_cards_to_div(implementedJokers, jokers_div);
}

if (inProgressJokers.length === 0) {
  document.querySelector(".inProgressJokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".inProgressJokers");
  add_cards_to_div(inProgressJokers, jokers_div);
}

if (conceptJokers.length === 0) {
  document.querySelector(".conceptJokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".conceptJokers");
  add_cards_to_div(conceptJokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}