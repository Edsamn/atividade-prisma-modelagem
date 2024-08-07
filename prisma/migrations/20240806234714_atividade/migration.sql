-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "link_github" TEXT,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "quantidade_estoque" INTEGER NOT NULL,
    "tipo_produto" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disponivel" BOOLEAN,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loja" (
    "cnpj" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "segmento" TEXT DEFAULT 'alimentação',
    "endereco" TEXT NOT NULL,
    "telefone" INTEGER,
    "quantia_filiais" INTEGER NOT NULL,
    "data_hora_abertura" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "loja_pkey" PRIMARY KEY ("cnpj")
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,
    "data_hora_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_hora_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fornecedor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");
