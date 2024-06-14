DELIMITER //

CREATE PROCEDURE calcSubtotais()
BEGIN
    DECLARE subtotal_calc DECIMAL(10,2);
    DECLARE done INT DEFAULT FALSE;
    DECLARE cur_id INT;
    DECLARE cur_placa VARCHAR(8);
    DECLARE cur_diaria DECIMAL(10,2);
    DECLARE cur_dias INT;

    DECLARE cur CURSOR FOR
        SELECT id, placa, (SELECT diaria FROM Veiculo WHERE placa = a.placa) AS diaria,
               DATEDIFF(devolucao, retirada) AS dias
        FROM Aluguel a
        WHERE devolucao IS NOT NULL;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO cur_id, cur_placa, cur_diaria, cur_dias;

        IF done THEN
            LEAVE read_loop;
        END IF;

        SET subtotal_calc = cur_diaria * cur_dias;

        UPDATE Aluguel SET subtotal = subtotal_calc WHERE id = cur_id;

    END LOOP;

    CLOSE cur;
END //

DELIMITER ;
