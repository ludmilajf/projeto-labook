-- Active: 1676313302592@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email INTEGER UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

CREATE TABLE posts(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER DEFAULT (0) NOT NULL,
    dislikes INTEGER DEFAULT (0) NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    updated_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE likes_dislikes( 
    user_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    like INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

INSERT INTO users(id, name, email, password, role)
    VALUES
    ("u001", "Maria Bonita", "maria_bonita@gmail.com", "bonita123", "ADMIN"),
    ("u002", "Lampião", "virgulino@gmail.com", "cangaco5678", "ADMIN"),
    ("u003", "Padre Cícero", "padinho_c@gmail.com", "avemaria001", "NORMAL");

INSERT INTO posts (id, creator_id, content)
VALUES
    ("p001", "u001", "Boa tarde, povo! Hoje o dia vai ser de estrada :)"),
    ("p002", "u002", "É bonita, é bonita..."),
    ("p003", "u002", "Rolezinho em Exu já já.");

INSERT INTO likes_dislikes (user_id, post_id, like)
VALUES
    ("u001", "p002", 1),
    ("u002", "p001", 1),
    ("u003", "p002", 1),
    ("u003", "p003", 0);

SELECT * FROM posts;

UPDATE posts
SET likes = 1
WHERE id = "p001";

UPDATE posts
SET likes = 2
WHERE id = "p002";

UPDATE posts
SET dislikes = 1
WHERE id = "p003";