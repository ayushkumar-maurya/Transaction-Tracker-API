/*---------------------------------------------------------
Bank Transactions
---------------------------------------------------------*/
CREATE TABLE banks (
    id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200),
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
    remark VARCHAR(200),
    verified BOOLEAN NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (bank_id) REFERENCES banks(id) ON DELETE CASCADE,
    CHECK (deposit IS NOT NULL OR withdrawal IS NOT NULL)
);

/*---------------------------------------------------------
Stock Transactions
---------------------------------------------------------*/
CREATE TABLE brokerages (
    id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    PRIMARY KEY (id),
    UNIQUE (name)
);

CREATE TABLE stocks (
    id INT AUTO_INCREMENT,
    brokerage_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    mutual_fund BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (brokerage_id) REFERENCES brokerages(id) ON DELETE CASCADE,
    UNIQUE (brokerage_id, name)
);

CREATE TABLE stock_transactions (
    id INT AUTO_INCREMENT,
    stock_id INT NOT NULL,
    date DATE NOT NULL DEFAULT (CURRENT_DATE),
    description VARCHAR(100),
    deposit DECIMAL(10, 2),
    withdrawal DECIMAL(10, 2),
    remark VARCHAR(200),
    verified BOOLEAN NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (stock_id) REFERENCES stocks(id) ON DELETE CASCADE,
    CHECK (deposit IS NOT NULL OR withdrawal IS NOT NULL)
);

/*---------------------------------------------------------
Miscellaneous Transactions
---------------------------------------------------------*/
CREATE TABLE `groups` (
    id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    PRIMARY KEY (id),
    UNIQUE (name)
);

CREATE TABLE misc_transactions (
    id INT AUTO_INCREMENT,
    group_id INT NOT NULL,
    date DATE NOT NULL DEFAULT (CURRENT_DATE),
    description VARCHAR(100),
    deposit DECIMAL(10, 2),
    withdrawal DECIMAL(10, 2),
    remark VARCHAR(200),
    verified BOOLEAN NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (group_id) REFERENCES `groups`(id) ON DELETE CASCADE,
    CHECK (deposit IS NOT NULL OR withdrawal IS NOT NULL)
);
