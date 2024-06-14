DELIMITER //

CREATE TRIGGER after_update_aluguel
AFTER UPDATE ON Aluguel
FOR EACH ROW
BEGIN
    DECLARE dias_aluguel INT;
    DECLARE valor_diaria DECIMAL(10,2);
    DECLARE subtotal DECIMAL(10,2);

    IF NEW.devolucao IS NOT NULL THEN
       
        SET dias_aluguel = DATEDIFF(NEW.devolucao, NEW.retirada);

        SELECT diaria INTO valor_diaria
        FROM Veiculo
        WHERE placa = NEW.placa;

        SET subtotal = valor_diaria * dias_aluguel;

        UPDATE Aluguel
        SET subtotal = subtotal
        WHERE id = NEW.id;
    END IF;
END //

DELIMITER ;
