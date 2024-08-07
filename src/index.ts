import express from "express";
import * as dotenv from "dotenv";
import UsuarioController from "./controller/usuario.controller";
import ProdutoController from "./controller/produto.controller";
import LojaController from "./controller/loja.controller";
import FornecedorController from "./controller/fornecedor.controller";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server funcionando.");
});

const usuarioController = new UsuarioController();
app.post("/usuarios", usuarioController.create);
app.get("/usuarios", usuarioController.list);

const produtoController = new ProdutoController();
app.post("/produtos", produtoController.create);
app.get("/produtos", produtoController.list);

const lojaController = new LojaController();
app.post("/lojas", lojaController.create);
app.get("/lojas", lojaController.list);

const fornecedorController = new FornecedorController();
app.post("/fornecedores", fornecedorController.create);
app.get("/fornecedores", fornecedorController.list);
