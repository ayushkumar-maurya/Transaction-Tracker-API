CREATE TABLE banks (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name)
);

CREATE TABLE bank_transactions (
    id INT AUTO_INCREMENT,
    bank_id INT NOT NULL,
    date DATE NOT NULL DEFAULT (CURRENT_DATE),
    description VARCHAR(100),
    deposit DECIMAL(10, 2),
    withdrawal DECIMAL(10, 2),
    remark TEXT,
    verified BOOLEAN NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (bank_id) REFERENCES banks(id) ON DELETE CASCADE,
    CHECK (deposit IS NOT NULL OR withdrawal IS NOT NULL)
);
