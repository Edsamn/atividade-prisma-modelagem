import {Request, Response} from "express";
import db from "../database/prisma.connection";

class LojaController {
  public async create(req: Request, res: Response) {
    try {
      const {cnpj, nome, segmento, endereco, telefone, quantia_filiais, data_hora_abertura} = req.body;
      await db.loja.create({data: {cnpj, nome, segmento, endereco, telefone, quantia_filiais, data_hora_abertura}});
      return res.status(200).json({success: true, msg: "Loja criada."});
    } catch (error) {
      return res.status(500).json({success: true, msg: "Falha para criar loja."});
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const lojas = await db.loja.findMany();

      return res.status(200).json({success: true, msg: "Lista de lojas.", data: lojas});
    } catch (error) {
      return res.status(400).json({success: true, msg: "Falha ao listar lojas."});
    }
  }

  // const lojas = await prisma.loja.findMany({
  //   where: {
  //     OR: [
  //       {
  //         filial: {
  //           gt: 1,
  //         },
  //       },
  //       {
  //         gerente: null,
  //       },
  //     ],
  //   },
  // });
}

export default LojaController;
