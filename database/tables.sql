CREATE TABLE parent_categories (
    id INT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name)
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT,
    parent_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    PRIMARY KEY (id),
    FOREIGN KEY (parent_id) REFERENCES parent_categories(id) ON DELETE CASCADE,
    UNIQUE (name)
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT,
    category_id INT NOT NULL,
    date DATE NOT NULL DEFAULT (CURRENT_DATE),
    description VARCHAR(100),
    deposit DECIMAL(10, 2),
    withdrawal DECIMAL(10, 2),
    remark VARCHAR(200),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    CHECK (deposit IS NOT NULL OR withdrawal IS NOT NULL)
);
