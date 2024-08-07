import {Request, Response} from "express";
import db from "../database/prisma.connection";

class FornecedorController {
  public async create(req: Request, res: Response) {
    try {
      const {avaliacao, email, nome} = req.body;
      await db.fornecedor.create({data: {avaliacao, email, nome}});
      return res.status(200).json({success: true, msg: "Loja criada."});
    } catch (error) {
      return res.status(500).json({success: true, msg: "Falha para criar loja."});
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const fornecedores = await db.fornecedor.findMany();

      return res.status(200).json({success: true, msg: "Lista de lojas.", data: fornecedores});
    } catch (error) {
      return res.status(400).json({success: true, msg: "Falha ao listar lojas."});
    }
  }
}

export default FornecedorController;
