SELECT
    a.username AS username,
    a.email AS email,
    COUNT(ai.item_id) AS items,
    SUM(i.weight) AS total_weight
FROM
    accounts AS a
JOIN
    accounts_items AS ai ON a.id = ai.account_id
JOIN
    items AS i ON ai.item_id = i.id
GROUP BY
    a.id
HAVING
    total_weight > 20
ORDER BY
    total_weight DESC, username ASC;