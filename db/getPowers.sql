SELECT p.power, p.description FROM powers p
JOIN heroes_powers hp ON p.id = hp.power_id
JOIN heroes h ON h.id = hp.hero_id
WHERE h.id = $1;