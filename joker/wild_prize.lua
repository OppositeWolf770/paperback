SMODS.Joker {
    key = "wild_prize",
    loc_txt = {
        name = "[[WILD PRIZE!1!]]",
        text = {
            "Retrigger all {C:attention}#1#{}, {C:attention}#2#{}, and {C:attention}#3#{}",
            "Each of these earn {C:money}$#4#{} when scored",
        }
    },
    config = {
        extra = {
            a_money = 1,
            repetitions = 1
        }
    },
    rarity = 2,
    pos = { x = 5, y = 2 },
    atlas = "jokers_atlas",
    cost = 7,
    unlocked = true,
    discovered = true,
    blueprint_compat = true,
    eternal_compat = true,
    soul_pos = nil,

    loc_vars = function(self, info_queue, center)
        return {
            vars = {
                "Aces",
                "9s",
                "7s",
                center.ability.extra.a_money
            }
        }
    end,

    calculate = function(self, card, context) 
        if not card.debuff then
            if context.individual and context.cardarea == G.play then
                if wp_is_valid_card(context.other_card) then
                    G.GAME.dollar_buffer = (G.GAME.dollar_buffer or 0) + card.ability.extra.a_money
                    G.E_MANAGER:add_event(Event({func = (function() G.GAME.dollar_buffer = 0; return true end)}))
                    return {
                        dollars = card.ability.extra.a_money,
                        card = card
                    }
                end
            end
        end

        if context.repetition and context.cardarea == G.play then
            if wp_is_valid_card(context.other_card) then
                return {
                    message = localize('k_again_ex'),
                    repetitions = card.ability.extra.repetitions,
                    card = card
                }
            end
        end
    end
}


function wp_is_valid_card(card)
    if card:get_id() == 14 or card:get_id() == 9 or card:get_id() == 7 then
        return true
    end
end