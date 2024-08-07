import {Request, Response} from "express";
import db from "../database/prisma.connection";

class ProdutoController {
  public async create(req: Request, res: Response) {
    try {
      const {descricao, quantidade_estoque, tipo_produto, valor, disponivel} = req.body;
      await db.produto.create({data: {descricao, quantidade_estoque, tipo_produto, valor, disponivel}});
      return res.status(200).json({success: true, msg: "Produto criado."});
    } catch (error) {
      return res.status(500).json({success: true, msg: "Falha para criar lojaroduto."});
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const produtos = await db.produto.findMany();

      return res.status(200).json({success: true, msg: "Lista de produtos.", data: produtos});
    } catch (error) {
      return res.status(400).json({success: true, msg: "Falha ao listar produtos."});
    }
  }

  // async function getAlimentos() {
  //   const alimentos = await prisma.produto.findMany({
  //     where: {
  //       tipo: 'A',
  //     },
  //   });
  //   console.log(alimentos);
  // }

  // getAlimentos();

  // const produtos = await prisma.produto.findMany({
  //   where: {
  //     valor: {
  //       gt: 10.00,
  //     },
  //   },
  // });
}

export default ProdutoController;
